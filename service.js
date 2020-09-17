var request = require('request');

function listerClients() {

    var savedBody;

    function saveBody(bodyToSave) {
        savedBody = bodyToSave
    }
    
    request('http://localhost:8080/clients?start=0&size=3', { json: true }, (err, res, body) => {
        if ( err ){
            return "Erreur : " + err ;
        } else {
            return body
        }
    });

    return savedBody;
}

//function ajouterClient()

exports.listerClients = listerClients;