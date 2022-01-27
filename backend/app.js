const express = require('express');
const app = express();

// Routes
const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/article');
const commentRoutes = require('./routes/comment');
// app.use (préciser le dossiers des images si besoin, dans ce cas importer le package "path")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Gestion des erreurs CORS
app.use((req, res, next) => { // Le middleware ne prend pas d'adresse en premier paramètre afin de s'appliquer à toutes les routes
    res.setHeader('Access-Control-Allow-Origin', '*'); // '*' permet d'accéder à notre API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');// envoie des requêtes avec les méthodes mentionnées
    next();
})

// Routes utilisateurs
app.use('/api/auth', userRoutes);
app.use('/api/forum', articleRoutes);
app.use('/api/comment', commentRoutes);


module.exports = app;