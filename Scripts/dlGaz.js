const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

const file = fs.createWriteStream("gaz.json");
const request = http.get("https://opendata.agenceore.fr/explore/dataset/conso-elec-gaz-annuelle-par-secteur-dactivite-agregee-commune/download?format=csv&amptimezone=Europe/Berlin&ampuse_labels_for_header=false", function(response) {
    
    response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Données du gaz téléchargées");
   });
});