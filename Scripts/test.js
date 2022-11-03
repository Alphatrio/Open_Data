var XLSX = require('xlsx');
var workbook = XLSX.readFile('../Data/internet.xlsx');

var debitName = workbook.SheetNames[2];
var debitSheet = workbook.Sheets[debitName];

var debitSheet_json = XLSX.utils.sheet_to_json(debitSheet);

console.log(debitSheet_json)
