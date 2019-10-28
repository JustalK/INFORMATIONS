const { expect, assert } = require('chai');

const date = require('./../index.js');

describe('isValid function', () => {
	it('Try with valide date objects', async function() {
		let now = new Date();
		assert.isTrue(date.isValide(now));
	});
	it('Try with nan', async function() {
		let nan = NaN;
		assert.isFalse(date.isValide(nan));
	});
	it('Try with non valide objects', async function() {
		let fakeDate = "10/12/25";
		assert.isFalse(date.isValide(fakeDate));
		let anotherFakeDate = new Date("15/10/25");
		assert.isFalse(date.isValide(anotherFakeDate));
	});
});

describe('addDay function', () => {
	it('Try to add 10 day to a date', async function() {
		let day = new Date("10/12/2018");
		let dayTenDayAfter = date.addDay(day,10);
		assert.isTrue(day.getDate()+10===dayTenDayAfter.getDate());
	});
});