var XLSX = require('xlsx');
var workbook = XLSX.readFile('../Data/internet.xlsx');

var debitName = workbook.SheetNames[2];
var debitSheet = workbook.Sheets[debitName];

var debitSheet_json = XLSX.utils.sheet_to_json(debitSheet);

console.log(debitSheet_json[1])


var debit_json = [];
var round = 2;

for(var i = 1; i < debitSheet_json.length; i++) {

    var item = debitSheet_json[i];

    debit_json.push({
        "Code INSEE" : item["Données utilisées dans les formules. Ne pas effacer"],
        "Commune" : item["__EMPTY"],
        "0,5 Mbits/s" : Number(item["Pourcentage d'éligibles par classe de débit"]).toFixed(round),
        "3 Mbits/s" : Number(item["__EMPTY_2"]).toFixed(round),
        "8 Mbits/s" : Number(item["__EMPTY_3"]).toFixed(round),
        "30 Mbits/s" : Number(item["__EMPTY_4"]).toFixed(round),
        "100 Mbits/s" : Number(item["__EMPTY_5"]).toFixed(round),
        "1 Gbits/s" : Number(item["__EMPTY_6"]).toFixed(round),
    });
}

console.log(debit_json)

/* .toFixed(round) */
