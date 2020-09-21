var request = require('request');

var backEndUrl = "https://hotel-web-app-h2.herokuapp.com"

function listerClients(callbackOK, callbackKO) {
    
    request( backEndUrl + '/clients?start=0&size=3', { json: true }, 
    (err, res, dateRequete) => {
        if ( err ){
            callbackKO(err) ;
        } else {
            callbackOK(dateRequete);
        }
    });
}

//function ajouterClient()

exports.listerClients = listerClients;

module.exports = {
    listerClients
}