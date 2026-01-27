// Icin nous créos notre application ExpressJs

// j'importe le framewordk Expressjs.
const express = require('express');

// J'initialise une application ExpressJs
const app = express();

// Middleware exécuté pour chaque requête reçue par le serveur
app.use((req, res, next) => {

    console.log("Je suis dans le serveur");

    // Passe au middleware ou à la route suivante
    next();
});

/*app.use((req, res, next) => {

    // Envoie une réponse JSON au client avec un message
    res.json({message:"Vous êtes bien sur le serveur"});
    next();
});*/

app.use((req, res, next) => {
    console.log("Bonjour, je suis le serveur!");
    next();
});

// Je dessine mes Routes avec Express
app.use('/api/fruit',(req,res) => {
    console.log("Je passe dans a route /api/fruit");
   // mon fruit
   const fruit = [
        {
            id: 1,
            nom: "pomme",
            description: "fruit saisonier",
            prix: 3


        }
   ];

   // En terem de réponse je renvoie le tableau de fruits
   res.json(fruit);
});

/*
j'exporte l'application express sous forme de module
Ainsi, l'application app peut être importée dans d'autres fichiers JS.
*/
module.exports = app;//fin du fichier. Donc ne pas coder en dessous de celui-ci
