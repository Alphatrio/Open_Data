"use strict";

const express= require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const httprequest = require('request');
app.use(express.json())

// Swagger ingtegration
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');


app.get('/', function(request, response){
    response.send('Intégration de données connectées');
})



const csv = require('csv-parser');
var fs = require("fs");



app.get('/clem',function(request,response){



let url = "https://www.data.gouv.fr/fr/datasets/r/4c99a0ed-f887-44bb-b62a-11f274c0678f";

let options = {json: true};



httprequest(url, options, (error, res, arr) => {
    if (error) {
        return  console.log(error)
    };

    if (!error && res.statusCode == 200) {

  //var arr = JSON.parse(body);
   


 const groupArray = (arr = []) => {
   // create map
   let map = new Map()
   for (let i = 0; i < arr.length; i++) {
      const s = JSON.stringify(arr[i].fields.commune);
      if (arr[i].fields.annee==2021){
      if (!map.has(s)) {
         map.set(s, {
            ville: arr[i].fields.ville,
            commune: arr[i].fields.commune,
            annee: arr[i].fields.annee,
            effectif: arr[i].fields.effectif_presents_total_series,
            succes : (arr[i].fields.effectif_presents_total_series/100)*arr[i].fields.taux_brut_de_reussite_total_series,
            //mention : (arr[i].fields.effectif_presents_total_series/100)*arr[i].fields.taux_mention_brut_toutes_series,
            NbLycee: 1,
         });
      } else {
         map.get(s).NbLycee++;
         map.get(s).effectif=map.get(s).effectif+arr[i].fields.effectif_presents_total_series;
         map.get(s).succes=map.get(s).succes+((arr[i].fields.effectif_presents_total_series/100)*arr[i].fields.taux_brut_de_reussite_total_series);
         //map.get(s).mention=map.get(s).mention+(arr[i].fields.taux_mention_brut_toutes_series)
         //probleme mention care nan value pour certains

      }
    }
   }
   const res = Array.from(map.values())
   return res;
};


var jsonContent = JSON.stringify(groupArray(arr));
console.log(jsonContent);
var a= new Set(groupArray(arr).map(item => item.commune)).size
console.log(a);

 
fs.writeFile("ResultatsBaccCommune.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});





    };
});

});















  
app.listen(PORT, function(){
    console.log('Hello :'+ PORT);
}) 