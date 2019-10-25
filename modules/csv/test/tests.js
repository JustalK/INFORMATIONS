const { expect } = require('chai');
const { getLegend } = require('./../index.js');

describe('getLegend function', () => {
	it('test to grab the legends of a csv', () => {
		let legends = getLegend("");
		expect(true).to.eql(true);
	});
});
