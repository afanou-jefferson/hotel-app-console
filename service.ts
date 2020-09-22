//const request = require('request-promise-native'); // renvoie un objet de type promesse lorsque l'on apelle une requête

import request from 'request-promise-native';


const backEndUrl = "https://hotel-web-app-h2.herokuapp.com"

function listerClients() {
   
    return request( `${backEndUrl}/clients?start=0&size=3`, { json: true })
        .then(listeClients => listeClients.map(client => {
            client.nom = client.nom.toUpperCase();
            return client;
        }))
    
   
   
    /* 
    return new Promise(( resolve, reject ) => { 

        request( `${backEndUrl}/clients?start=0&size=3`, { json: true },
            (err, res, listeDeClients) => { // fonction callback
                if (err) {
                    reject(err);
                } else {
                    resolve (listeDeClients);
                }
            });
    }); 
    */
}


export default listerClient;

