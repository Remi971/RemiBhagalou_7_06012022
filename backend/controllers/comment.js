const db = require('../models');

exports.getComments = async (req, res) => {
    try {
        const comments = await db.Comment.findAll({
            where : {
                article_id : req.params.id
            }
        });
        res.status(200).json(comments);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

exports.createComment = async (req, res) => {
    try {
        const comment = await db.Comment.create({
            message: req.body.message,
            article_id: req.body.article_id,
            user_id: req.body.user_id
        });
        res.status(200).json({message: "Vous avez commenter l'article !"})
    }
    catch (error) {
        res.status(500).json({ error });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const comment = db.Comment.update({
            message: req.body.message,
            article_id: req.body.article_id,
            user_id: req.body.user_id
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({message: "Commentaire modifié !"})
    }
    catch (error) {
        res.status(500).json({ error });
    }
};

exports.destroyComment = async (req, res) => {
    try {
        const comment = await db.Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({message: "Commentaire supprimé !"});
    }
    catch (error) {
        res.status(500).json({ error });
    }
};