const Promise = require('bluebird');
const fcsv = require("fast-csv");
const util = require('util');
const stream = require('stream');
const pipeline = util.promisify(stream.pipeline);

/**
 * Get the legend of the csv file
 * @param File file the file with the legend
 * @return Array The array of the first line of the csv
 */
const getLegend = async function (file) {
	return new Promise((resolve, reject) => {
		fcsv.parseFile(file.path)
		.on("data", function(lcsv) {
			resolve(lcsv);
			this.destroy();
		})
	})
}

/**
 * Get the data of the csv
 * @param File file the file that we wanna extract the data
 * @param Array legend the legend of the csv, gonna be use for creating the map of the data
 * @param Bolean hasLegend If true, we gonna skip the first line, if else we take everything
 */
const getData = async function (file,legend,hasLegend) {
	return new Promise((resolve, reject) => {
		let rsl = [],first=true;
		fcsv.parseFile(file.path)
		.on("data", function(lcsv) {
			if(first && hasLegend) {
				first=false
				return;
			}
			let line = {};
			lcsv.map((x,i) => line[legend[i]]=x);
			rsl.push(line);
		})
		.on("end", function() {
			resolve(rsl);
		})
	})
}

const mergeMap = async function(array1,array2,mergeColumnsArray1,mergeColumnsArray2,finalColumnsArray1,finalColumnsArray2) {
	let rsl = [], find=false;
	for(const obj1 of array1) {
		for(const obj2 of array2) {
			find=true;
			for(let i=0;i<mergeColumnsArray1.length;i++) {
				if(obj1[mergeColumnsArray1[i]]!=obj2[mergeColumnsArray2[i]]) find=false;
			}
			if(find) {
				let tmp = {};
				finalColumnsArray1.map(x => tmp[x]=obj1[x]);
				finalColumnsArray2.map(x => tmp[x]=obj2[x]);
				rsl.push(tmp);
			}
		}
	}
	return rsl;
}

/**
 * Change the field of every object in an array
 * @param Array array The array of the object to modify
 * @param Array columnToReplace The column to replace in the objects
 * @param Array columnReplacer The column that gonna replace the old one
 * @return Array The array with all the columnToReplace removed and columnReplacer added
 */
const rearangeMap = async function(array,columnToReplace,columnReplacer) {
	if(columnToReplace.length!=columnReplacer.length) throw "column are different";
	array = array.map(x => rearangeObject(x,columnToReplace,columnReplacer));
	return array;
}

/**
 * Change the fields of an object
 * @param Object obj The object to modify
 * @param Array columnToReplace The column to replace in the objects
 * @param Array columnReplacer The column that gonna replace the old one
 * @return Object The object with all the columnToReplace removed and columnReplacer added
 */
function rearangeObject(obj,columnToReplace,columnReplacer) {
	let tmp = {};
	columnReplacer.map((y,i) => tmp[y]=obj[columnToReplace[i]]);
	columnToReplace.map(y => delete obj[y]);
	Object.assign(obj,tmp);
	return obj;
}

const services = {
	getLegend,
	getData,
	mergeMap,
	rearangeMap,
	rearangeObject
}

module.exports = services;