//const request = require('request-promise-native'); // renvoie un objet de type promesse lorsque l'on apelle une requête

import request, { RequestPromiseAPI } from 'request-promise-native';
import { Client } from "./domains" ;


const backEndUrl = "https://hotel-web-app-h2.herokuapp.com"

interface ClientBack {
    uuid:string;
    nom:string;
    prenoms:string;
}

class Service {

    request : RequestPromiseAPI;

    constructor(){
        this.request = request; // request imported
    }

    listerClient(): Promise<Client[]> {
        return this.request.get(`${backEndUrl}/clients`, {json: true}) //Return une promesse qui si succès renvois un/des ClientBack (forme de DTO de Client) et pour chacun d'entre eux on les map en objet Client
            .then((result: ClientBack[]) => result.map(clientBack => new Client(clientBack.uuid, clientBack.nom, clientBack.prenoms)));
    }

    findByName(nomAChercher: string): Promise<Client[]> {
        return this.request.get(`${backEndUrl}/clients/nom=${nomAChercher}`, { json: true })
            .then((result: ClientBack[]) => result.map(clientBack => new Client(clientBack.uuid, clientBack.nom, clientBack.prenoms)));
    }

    posterClient(saisieNom: string, saisiePrenom: string): Promise<void> {
        return this.request.post({
            url: `${backEndUrl}/clients`,
            method: 'POST',
            json: {
                nom: saisieNom,
                prenoms: saisiePrenom
            }
        });
    }



}


export {Service};

