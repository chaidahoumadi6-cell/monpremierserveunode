// Ici je code mon serveur

/*J'importe le package (module) http. Le module HTTP est stocké dans la variable HTTP
L'instruction require() permet d'importer le module.children.
*/
const http = require('http');

//Maintenat,je créer mon serveur en utilisant le package HTTP
const serveur = http.createServer((req,res) => {
    res.end("Bonjour,je suis le serveur");
});

// Je précise l'adresse et le port du serveur
serveur.listen(3000);