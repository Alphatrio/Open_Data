console.log('Début du chargement du fichier')

var XLSX = require('xlsx');
var workbook = XLSX.readFile('../Data/bio.xlsx');
var sheetName = workbook.SheetNames[0];
var worksheet = workbook.Sheets[sheetName];

console.log(worksheet)