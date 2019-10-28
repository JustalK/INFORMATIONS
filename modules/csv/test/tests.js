const { expect } = require('chai');
const { getLegend, getData } = require('./../index.js');

describe('getLegend function', () => {
	it('test to grab the legends of a csv', async function() {
		let file = {"path" : "./test/test.csv"}
		let legends = await getLegend(file);
		expect(legends).to.eql([ 'column1', 'column2', 'column3', 'column4', 'column5' ]);
	});
});

describe('getData function', () => {
	it('test to grab the data of a csv', async function() {
		let file = {"path" : "./test/test.csv"}
		let legends = await getLegend(file);
		let data = await getData(file,legends,true);
		expect(data.length).to.eql(3);
		expect(data[1].column4).to.eql("2");
		expect(data[0].column1).to.eql("kevin1");
	});
});
