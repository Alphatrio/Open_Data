fs = require("fs");
toArray = require("to-array");
const express= require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const httprequest = require('request');
app.use(express.json())

let url = "https://www.data.gouv.fr/fr/datasets/r/6fa2126d-4c46-40f5-8a52-d5f3eae92dce";
        let options = {json: true};
        var req=httprequest(url, options, (error, res, gaz_json) => {
          if (error) {
            return  console.log(error)
          };

          if (!error && res.statusCode == 200) { 
            try {
                // lecture du json importé dans dlGaz.js 
               // let gaz_json = require("./gaz_elec.json");
              //console.log(typeof(gaz_json));
              //console.log(gaz_json);
              
              // selection des colonnes : code_commune,libelle_commune,indquali et de la bonne annee 
              //var csv_col = gaz_json.map(({code_commune,libelle_commune,indquali})=>({code_commune,libelle_commune,indquali}))
              
                let map=new Map()
                for (let i=0; i< gaz_json.length;i++){
                  const s=JSON.stringify(gaz_json[i].fields.code_commune)
                  if (gaz_json[i].fields.annee==2019){
                  map.set(s,{
                      commune:gaz_json[i].fields.code_commune,
                      ville:gaz_json[i].fields.libelle_commune,
                      indice_gaz:gaz_json[i].fields.indquali,
                  })
                }
              }
                const res=Array.from(map.values())
                var jsonContent=JSON.stringify(res);
                // export du jeu de donnee 
                fs.writeFile("gaz_elec_final.json", jsonContent, 'utf8', function (err) {
                  if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                  }
                  console.log("Data modifiées");
                }); 
              }catch(e){
                  console.error(e);
              }
            }
        })
