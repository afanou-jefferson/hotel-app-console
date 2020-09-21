// récupération du module `readline`
const readline = require('readline');
const service = require("./service.js");

// création d'un objet `rep` permettant de récupérer la saisie utilisateur
const rep = readline.createInterface({
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

                const listeClients = service.listerClients();

                listeClients
                    .then(clients => console.log(
                        clients
                            .map(client => `${client.nom} ${client.prenoms}`)
                            .join('\n') // On rajoute un retour à la ligne
                    ))
                    .catch(err => console.log('Erreur !'))
                    .finally(() => start()); // On affiche à nouveau le menu dans tous les cas, erreur ou non 

                    /* Old version
                service.listerClients(
                    listerClients => {
                        console.log(
                            listerClients
                                .map(client => `${client.nom} ${client.prenoms}`)
                                .join('\n') // On rajoute un retour à la ligne
                        );
                        start();
                    }, err => {
                        console.log("Erreur");
                        start();
                    }); */
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
