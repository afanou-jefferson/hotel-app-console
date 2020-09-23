
// récupération du module `readline`
import readline from "readline";

// import depuis service
import {Service} from "./service";

//import client
import {Client} from "./domains"             


// création d'un objet `rep` permettant de récupérer la saisie utilisateur
const rep = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Presentation {

    monService: Service;

    constructor(service: Service) {
        this.monService = service;
    }

    start() {

        console.log("Menu");
        console.log("1. Lister les clients");
        console.log("2. Ajouter un client");
        console.log("3. Recherche un client par nom");
        console.log("4. Vérifier la disponibilité d'une chambre");
        console.log("99. Sortir");

        rep.question('Votre choix :', (saisie: string) => {

            switch (saisie) {
                case "1":

                    console.log("\n>> Liste des clients\n");

                    this.monService.listerClient()
                        .then(listClients => console.log(
                            listClients
                                .map(client => client.toString())
                                .join('\n')
                        ))
                        .catch((err: string) => console.log(err))
                        .finally(() => {
                            console.log("\r");
                            this.start();
                        })

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
                    console.log("\n>> Ajouter un client\n");
                    rep.question("Entrez un Nom : ", (saisieNom: string) => {
                        rep.question("Entrez un Prenom : ", (saisiePrenom: string) => {
                            this.monService.posterClient(saisieNom, saisiePrenom)
                                .then(() => console.log(`${saisieNom} ${saisiePrenom} a été ajouté !`))
                                .catch((err: string) => console.log(err))
                                .finally(() => {
                                    console.log("\r");
                                    this.start();
                                })
                        })
                    })

                    break;

                case "3":
                    console.log("\n>> Rechercher un client par nom\n");

                    rep.question("Entrez le Nom à chercher: ", (saisieNom: string) => {
                        this.monService.findByName(saisieNom)
                            .then((clients: Client[]) => console.log(
                                clients
                                    .map(client => client.toString())
                                    .join('\n')
                            ))
                            .catch((err: string) => console.log(err))
                            .finally(() => {
                                console.log("\r");
                                this.start();
                            })
                    })
                    break;

                case "4":
                    console.log("\n>> Vérifier la disponibilité d'une chambre\n");
                    console.log("\nComing soon!\n");
                    this.start();
                    break;

                case "99":
                    console.log("\n Aurevoir.")
                    rep.close();
                    process.exit(); // Met fin au programme
                    break;

                default:
                    console.log("\nTU SAIS PAS LIRE? 1, 2, 3, 4 ou 99 ! Retry =>")
                    this.start();
                    break;

            }
        });
        
    }
    
}

export { Presentation };