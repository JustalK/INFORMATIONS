const BAD_DATE = "This is not a valid date in the calendar";
const MONTHS = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const isValide = function(d) {
	return d instanceof Date && !isNaN(d);
}

const addDay = function(d,days) {
	let date = new Date(d.valueOf());
	date.setDate(date.getDate() + days);
	return date;
}

const toPhillipineDate = function(d) {
	return d.getDate()+" "+MONTHS[d.getMonth()]+" "+d.getFullYear();
}

const getCurrentFullYear = function() {
	return (new Date()).getFullYear();
}

const getCurrentMonth = function() {
	return (new Date()).getMonth();
}

module.exports = {
	isValide,
	addDay,
	toPhillipineDate,
	getCurrentFullYear,
	getCurrentMonth,
	BAD_DATE
}
