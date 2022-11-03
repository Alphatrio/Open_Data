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


  function readBac(){
      const p1= new Promise(function(resolve, reject) { 

        let url = "https://www.data.gouv.fr/fr/datasets/r/4c99a0ed-f887-44bb-b62a-11f274c0678f";
        let options = {json: true};
        var req=httprequest(url, options, (error, res, arr) => {
          if (error) {
            return  console.log(error)
          };

          if (!error && res.statusCode == 200) {
            const groupArray = (arr = []) => {
              let map = new Map()
              for (let i = 0; i < arr.length; i++) {
                const s = JSON.stringify(arr[i].fields.commune);
                if (arr[i].fields.annee==2021){
                  if (!map.has(s)) {
                    map.set(s, {
                      ville: arr[i].fields.ville,
                      commune: arr[i].fields.commune,
                      annee: arr[i].fields.annee,
                      effectifBac: arr[i].fields.effectif_presents_total_series,
                      succesBac : (arr[i].fields.effectif_presents_total_series/100)*arr[i].fields.taux_brut_de_reussite_total_series,
                      NbLycee: 1,
                    });
                  } 
                  else {
                    map.get(s).NbLycee++;
                    map.get(s).effectifBac=map.get(s).effectifBac+arr[i].fields.effectif_presents_total_series;
                    map.get(s).succesBac=map.get(s).succesBac+((arr[i].fields.effectif_presents_total_series/100)*arr[i].fields.taux_brut_de_reussite_total_series);
                  }
                }
              }
            const res = Array.from(map.values())
            return res;
            };
            var jsonContent = JSON.stringify(groupArray(arr));
            var a= new Set(groupArray(arr).map(item => item.commune)).size
            fs.writeFile("ResultatsBaccCommune.json", jsonContent, 'utf8', function (err) {
              if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
              }
              console.log("Bac file has been saved.");
              resolve('ResultatsBaccCommune.json');
            });
          };
        });
        req.end();
      });

  
      const p2= new Promise(function(resolve, reject) { 
        let  url = "https://www.data.gouv.fr/fr/datasets/r/a092ffd8-8702-449e-9202-8c240caf2d1a";
        let options = {json: true};
        var req2=httprequest(url, options, (error, res, arr) => {
          if (error) {
            return  console.log(error)
          };
          if (!error && res.statusCode == 200) {
            const groupArray = (arr = []) => {
              let map = new Map()
              for (let i = 0; i < arr.length; i++) {
              const s = JSON.stringify(arr[i].fields.commune_et_arrondissement);
              if (arr[i].fields.session==2021){
                if (!map.has(s)) {
                  map.set(s, {
                    ville: arr[i].fields.commune_et_arrondissement_lib_l,
                    commune: arr[i].fields.commune_et_arrondissement,
                    annee: arr[i].fields.session,
                    effectifBrevet: arr[i].fields.nombre_d_inscrits,
                    succesBrevet : arr[i].fields.nombre_total_d_admis,
                    NbCollege: 1,
                  });
                } 
                else {
                  map.get(s).NbCollege++;
                  map.get(s).effectifBrevet=map.get(s).effectifBrevet+arr[i].fields.nombre_d_inscrits;
                  map.get(s).succesBrevet=map.get(s).succesBrevet+arr[i].fields.nombre_total_d_admis;
                }
              }
            }
            const res = Array.from(map.values())
            return res;
            };
            var jsonContent = JSON.stringify(groupArray(arr));
            var a= new Set(groupArray(arr).map(item => item.commune)).size

            fs.writeFile("ResultatsBrevetCommune.json", jsonContent, 'utf8', function (err) {
              if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
              }
              console.log("Brevet file has been saved.");
              resolve('ResultatsBrevetCommune.json');
            });
          };
        });
        req2.end();
      });

    Promise.all([p2, p1]).then((values) => {
                          Mergeresult(values);
                          })
                          .catch(error => {
                            console.log(error);
                          });
                        }



function Mergeresult(values){
  let arr = require('./'+values[1]);
  let databrevet = require('./'+values[0]);
  let map = new Map()
  for (let i = 0; i < arr.length; i++) {
    const s = JSON.stringify(arr[i].commune);
    if (!map.has(s)) {
      map.set(s, {
        ville: arr[i].ville,
        commune: arr[i].commune,
        annee: arr[i].annee,
        PtcSuccesBac : (arr[i].succesBac/arr[i].effectifBac)*100,
        NbLycee: arr[i].NbLycee,
        NbCollege:0,
        PtcSuccesbrevet:0,
        Score:(arr[i].succesBac/arr[i].effectifBac)*100,
      });
    } 
  }

  for (let i = 0; i < databrevet.length; i++) {
    const s = JSON.stringify(databrevet[i].commune);
    if (!map.has(s)) {
      map.set(s, {
        ville: databrevet[i].ville,
        commune: databrevet[i].commune,
        annee: databrevet[i].annee,
        NbLycee: 0,
        PtcSuccesbrevet :(databrevet[i].succesBrevet/databrevet[i].effectifBrevet)*100,
        NbCollege:databrevet[i].NbCollege,
        Score:(databrevet[i].succesBrevet/databrevet[i].effectifBrevet)*100,
      });
    } 
    else{
      map.get(s).NbCollege=databrevet[i].NbCollege;
      map.get(s).PtcSuccesbrevet=(databrevet[i].succesBrevet/databrevet[i].effectifBrevet)*100;
      map.get(s).Score=(map.get(s).Score+((databrevet[i].succesBrevet/databrevet[i].effectifBrevet)*100))/2
    }
  }
  const res = Array.from(map.values())
  var jsonContent = JSON.stringify(res);
  var a= new Set(res.map(item => item.commune)).size

  fs.writeFile("Resultats.json", jsonContent, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    console.log("Data ok.");
  }); 
}




app.get('/clem',function(request,response){
  readBac();
});

    
app.listen(PORT, function(){
  console.log('Hello :'+ PORT);
}) 