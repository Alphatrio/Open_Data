var XLSX = require('xlsx')
var fs = require('fs')



function parseBio(){
    var workbook = XLSX.readFile('../Data/bio.xlsx')
    var cheptelName = workbook.SheetNames[4];
    var cheptelSheet = workbook.Sheets[cheptelName];

    var cheptel = XLSX.utils.sheet_to_json(cheptelSheet)

    var cheptel2021 = cheptel.filter(function (el) {
        return el.annee == '2021' 
    });

    var cheptel2021B = cheptel2021.map(({codecommune,libellecommune,tetesbio})=>({codecommune,libellecommune,tetesbio}))

    return cheptel2021B
}

// function parsePop(){
//     var workbook = XLSX.readFile('../Data/pop.xlsx')
//     var popName = workbook.SheetNames[4]
//     var popSheet = workbook.Sheets[popName]
//     var pop = XLSX.utils.sheet_to_json(popSheet)

//     var pop2 = pop.map(({__EMPTY_4,__EMPTY_5,__EMPTY_8})=> ({__EMPTY_4,__EMPTY_5,__EMPTY_8}))

//     pop2.forEach(x => {
//         x.codeCommune = x.__EMPTY_4
//         x.nomCommune = x.__EMPTY_5
//         x.pop = x.__EMPTY_8
//         delete x.__EMPTY_4
//         delete x.__EMPTY_5
//         delete x.__EMPTY_8
//     })

//     return pop2
// }

//console.log(parseBio())

//console.log(parsePop())

bio = parseBio()

// console.log(bio)

// pop = parsePop()


// var combine_obj={}
// for(var key in bio)  combine_obj[key]=bio[key]
// for(var key in pop)  combine_obj[key]=pop[key]

// console.log(combine_obj)

function normalise(val, max, min) { 
    return (val - min) / (max - min)
}


var max = 0
var min = Infinity

bio.forEach(x=>{ 
    if (x.tetesbio > max){
        max = x.tetesbio
    }

    if (x.tetesbio < min){
        min = x.tetesbio
    }

})


// console.log(max)
// console.log(min)


bio.forEach(x=> {
    x['scoreBio'] = normalise(x.tetesbio,max,min)
})

// console.log(bio)

// console.log(typeof(bio))


var data = JSON.stringify(bio)

fs.writeFile("../Data/bioScore.json", data, function(err) {
    if (err) {
        console.log(err)
    }
})