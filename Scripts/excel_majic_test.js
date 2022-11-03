var XLSX = require('xlsx');
var workbook = XLSX.readFile('../Data/internet.xlsx');

var debitName = workbook.SheetNames[2];
var debitSheet = workbook.Sheets[debitName];

var debitSheet_json = XLSX.utils.sheet_to_json(debitSheet);

console.log(debitSheet_json[1])


var debit_json = [];

for(var i = 1; i < debitSheet_json.length; i++) {

    var item = debitSheet_json[i];
    var round = 2;

    debit_json.push({
        "Code INSEE" : item["Données utilisées dans les formules. Ne pas effacer"],
        "Commune" : item["__EMPTY"],
        "0,5 Mbits/s" : item["Pourcentage d'éligibles par classe de débit"],
        "3 Mbits/s" : item["__EMPTY_2"],
        "8 Mbits/s" : item["__EMPTY_3"],
        "30 Mbits/s" : item["__EMPTY_4"],
        "100 Mbits/s" : item["__EMPTY_5"],
        "1 Gbits/s" : item["__EMPTY_6"]
    });
}

console.log(debit_json)

######.toFixed(round)
