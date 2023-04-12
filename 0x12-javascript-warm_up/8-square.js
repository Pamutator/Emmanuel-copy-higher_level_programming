#!/usr/bin/node
const size = Math.floor(Number(process.argv[1]))
if (isNaN(size)) {
	console.log("Missing size")
} else {
	for (let r = 0; r < size; r++) {
		let row =" ";
		for (let c = 0; c < size; c++) row += "X"
	console.log(row)
	}
}
