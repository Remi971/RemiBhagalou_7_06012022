const db = require('../models/');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const userVerify = await db.User.findAll({
            where: {
                email: req.body.email
            }
        })
        if (userVerify.length > 0) {
            return res.status(401).json({error: "Utilisateur déjà inscrit"})   
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const user =  await db.User.create({
            nickname: req.body.nickname,
            email: req.body.email,
            password: hashPassword
        });
        res.status(200).json({
            userId: user.id,
            token: jwt.sign(
                { userId: user.id},
                'CHAINE_SECRETE_DE_DEVELOPPEMENT_TEMPORAIRE',
                { expiresIn: '24h'}
            )
        });
    }
    catch (err) {
        res.status(500).json( { err })
    }
};

exports.login = async (req, res) => {
    const userVerify = await db.User.findAll({
        where: {
            email: req.body.email
        }
    });
    try {
        if (userVerify.length === 0) {
            return res.status(401).json({error: "Utilisateur non trouvé !"})
        }
        const user = userVerify[0].dataValues;
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid) throw {status: 401, msg: "Mot de passe incorrect !"};
        res.status(200).json({
            userId: user.id,
            token: jwt.sign(
                { userId: user.id},
                'CHAINE_SECRETE_DE_DEVELOPPEMENT_TEMPORAIRE',
                { expiresIn: '24h'}
            )
        });
    }
    catch (err) {
        res.status(500).json({ err })
    }
};

exports.infoUser = async (req, res) => {
    try {

        const userId = await db.User.findAll({
            where: {
                id: req.params.id
            }
        });
        const user = userId[0]
        // const articles = await db.Article.findAll({
        //     where: {
        //         UserId: req.params.id
        //     }
        // });
        // console.log(articles);
        res.status(200).json({
            nickname: user.nickname,
            id: user.id
        });
    }
    catch (err) {
        res.status(500).json({ err });
        return;
    }
};

exports.deleteUser = async (req, res) => {
    const user = await db.User.destroy({
        where : {
            id: req.params.id
        }
    });
    res.status(200).json({message: "utilisateur supprimé"})
}

// Pour TEST
exports.getUsers = async (req, res) => {
    const users = await db.User.findAll();
    console.log(users);
    res.status(200).json(users);
};