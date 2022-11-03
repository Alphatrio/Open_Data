// import necessaire
const Papa = require("papaparse"),
fs = require("fs");
toArray = require("to-array");

try {
  // lecture du json importé dans dlGaz.js 
  let gaz_json = require("./gaz_elec.json");
//console.log(typeof(gaz_json));
//console.log(gaz_json);

// selection des colonnes : code_commune,libelle_commune,indquali et de la bonne annee 
var csv_col = gaz_json.map(({code_commune,libelle_commune,indquali})=>({code_commune,libelle_commune,indquali}))

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