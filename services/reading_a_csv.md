# Reading a csv


```
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
 * @return Array The data extract from the csv without or with the legend
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

/**
 * Merge the two array together following the the mergeColumn and keep only the final column of both array
 * @param Array array1 The first set of data
 * @param Array array2 The second set of data
 * @param Array mergeColumnsArray1 The name of the column that we gonna use for the merging in the first array1
 * @param Array mergeColumnsArray2 The name of the column that we gonna use for the merging in the second array2
 * @param Array finalColumnsArray1 The column that we gonna keep from the array1 after the merging
 * @param Array finalColumnsArray2 The column that we gonna keep from the array2 after the merging
 * @return Array The data with only the final column after merging
 */
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
 * Create a new column by affecting a function to every element of one column
 * @param Array array The set of data that we gonna apply the function
 * @param String nameAffectedColumn The name of the column/field that we gonna apply the function
 * @param String nameResultColumn The name of the new column
 * @param Function fc The function that we gonna apply to the column/field nameAffectedColumn
 * @return Array the array of the obj with the new column
 */
const newColumn = function(array,nameAffectedColumn,nameResultColumn,fc) {
	return array.map(function(x) {
		let tmp = {};
		tmp[nameResultColumn] = fc(x[nameAffectedColumn]);
		return Object.assign(x,tmp);
	})
}

/**
 * Change the field of every object in an array
 * @param Array array The array of the object to modify
 * @param Array columnToReplace The column to replace in the objects
 * @param Array columnReplacer The column that gonna replace the old one
 * @return Array The array with all the columnToReplace removed and columnReplacer added
 */
const rearangeMap = function(array,columnToReplace,columnReplacer) {
	if(columnToReplace.length!=columnReplacer.length) throw "column are different";
	return array.map(x => rearangeObject(x,columnToReplace,columnReplacer));
}

/**
 * Change the fields of an object
 * @param Object obj The object to modify
 * @param Array columnToReplace The column to replace in the objects
 * @param Array columnReplacer The column that gonna replace the old one
 * @return Object The object with all the columnToReplace removed and columnReplacer added
 */
const rearangeObject = function (obj,columnToReplace,columnReplacer) {
	let tmp = {};
	columnReplacer.map((y,i) => tmp[y]=obj[columnToReplace[i]]);
	columnToReplace.map(y => delete obj[y]);
	return Object.assign(obj,tmp);
}

module.exports = {
	getLegend,
	getData,
	mergeMap,
	rearangeMap,
	rearangeObject,
	newColumn
}
```
