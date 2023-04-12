#!/usr/bin/node
const num =Math.floor(Number(process.argv[1]))
console.log(isNaN(num) ? "Not a number" : "My number: ${num}")
