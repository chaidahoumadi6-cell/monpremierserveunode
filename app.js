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

// J'ajoute unmiddleware qui gére la sécurité d'accès
app.use((req, res,next) =>{
    // Je permet l'acces à mon API depuis n'importe quel origine
    res.setHeader('Access-Control-Allow-Origin','*');

    // J'autorise certaines en-têtes dans les requêtes reçues dans notre API. Les en-têtes autoriséees sont: Origin,X-Requested-With,Content,Accept,Content-type,Authorization 
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With, Content, Accept, Content-type, Authorization');

    // J'autorise d'envoyer des requêtes avec les méthodes: Get, Post, Put, Delete, Patch, Options
    res.setHeader('Access-Control-Allow-Methods','Get, Post, Put, Delete, Patch, Options');
    next();
})

/* Je dessine mes Routes avec Express avec la méthode GET
Route complet localhos:3003
*/
app.get('/api/fruit',(req,res) => {
    console.log("Je passe dans a route /api/fruit");
   // mon fruit
   const fruit = [
        {
            id: 1,
            nom: "pomme",
            description: "fruit saisonier",
            prix: 3


        },

        {
            id: 2,
            nom: "banane",
            description: "fruit",
            prix:4

        },
        {
            id:3,
            nom: "carotte",
            description: "légume",
            prix: 5
        }
   ];

   // En terem de réponse je renvoie le tableau de fruits
    res.status(200).json(fruit);
});


app.post('/api/fruit', (req, res) => {
    fruit = [
         {
            id: 1,
            nom: "pomme",
            description: "fruit saisonier",
            prix: 3


        },

        {
            id: 2,
            nom: "banane",
            description: "fruit",
            prix:4

        },
        {
            id:3,
            nom: "carotte",
            description: "légume",
            prix: 5
        }
    ];
    res.status(200).json(fruit);
});

app.put('/api/fruit', (req, res) => {
    
 

/*
j'exporte l'application express sous forme de module
Ainsi, l'application app peut être importée dans d'autres fichiers JS.
*/
module.exports = app;//fin du fichier. Donc ne pas coder en dessous de celui-ci
