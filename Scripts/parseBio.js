console.log('Début du chargement du fichier')

var XLSX = require('xlsx');
var workbook = XLSX.readFile('../Data/bio.xlsx');
var cheptelName = workbook.SheetNames[3];
var cheptelSheet = workbook.Sheets[cheptelName];



var cheptel = XLSX.utils.sheet_to_json(cheptelSheet)

var cheptel2021 = cheptel.filter(function (el) {
    return el.annee == '2021' 
  });





console.log(cheptel2021)




