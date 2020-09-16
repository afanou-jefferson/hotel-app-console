// récupération du module `readline`
var readline = require('readline');

// création d'un objet `rep` permettant de récupérer la saisie utilisateur
var rep = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

function start (){
    console.log("Menu")
    console.log("1. Lister les clients");
    console.log("99. Sortir");
    rep.question('Votre choix :', function(saisie){
        if ( saisie == "1"){
            console.log(">> Liste des clients")
            start();
        } else if ( saisie == "99") {
            console.log("Aurevoir.")
            rep.close();
            this.process.exit(); // Met fin au programme
        }
    })

}

exports.start = start;