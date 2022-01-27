const db = require('../models');
const fs = require('fs');

exports.getAllArticles = async (req, res) => {
    try {
        const articles = await db.Article.findAll();
        res.status(200).json(articles);
    }
    catch (error) {
        res.status(500).json({ error });
    }
};

exports.getOneArticle = async (req, res) => {
    try {
        const article = await db.Article.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(article);
    }
    catch (error) {
        res.status(500).json({ error });
    }
};

exports.createArticle = async (req, res) => {
    try {
        const article = await db.Article.create({
            url: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            alttext: req.body.alttext,
            message: req.body.message,
            user_id : req.body.user_id
        });
        res.status(200).json({message: 'Article créé avec succès !'})
    }
    catch (error) {
        res.status(500).json( { error });
    }
};

exports.updateArticle = async (req, res) => {
    try {
        const article = await db.Article.update({
            url: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            alttext: req.body.alttext,
            message: req.body.message,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({message: "Article modifié !"})
    }
    catch (error) {
        res.status(500).json( { error });
    }
};

exports.destroyArticle = async (req, res) => {
    try {
        const article = await db.Article.destroy({
            where : {
                id: req.params.id
            }
        });
        res.status(200).json({message: "Article supprimé"})
    }
    catch (error) {
        res.status(500).json( { error });
    }
}