// récupération du module `readline`
var readline = require('readline');
var service = require("./service.js");

// création d'un objet `rep` permettant de récupérer la saisie utilisateur
var rep = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function start() {

    console.log("Menu");
    console.log("1. Lister les clients");
    console.log("2. Ajouter un client");
    console.log("3. Recherche un client par nom");
    console.log("4. Vérifier la disponibilité d'une chambre");
    console.log("99. Sortir");

    rep.question('Votre choix :', function (saisie) {
        
        switch (saisie) {
            case "1":
                service.listerClients(
                    listerClients => {
                        console.log(
                            listerClients
                                .map(client => client.nom + ' ' + client.prenoms)
                                .join('\n') // On rajoute un retour à la ligne
                        );
                        start();
                    }, err => {
                        console.log("Erreur");
                        start();
                    });
                break;

            case "2":

                break;
            case "99":
                console.log("Aurevoir.")
                rep.close();
                this.process.exit(); // Met fin au programme
                break;
        }
    }
    )
}

exports.start = start;
