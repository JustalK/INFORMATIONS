const fcsv = require("fast-csv");

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

module.exports = {
	getLegend
}
