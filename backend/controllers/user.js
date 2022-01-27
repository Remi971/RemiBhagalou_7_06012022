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
        res.status(200).json({message: "Groupomania vous souhaite la bienvenue !"});
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
    //console.log(userVerify);
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
}

// Pour TEST
exports.getUsers = async (req, res) => {
    const users = await db.User.findAll();
    res.status(200).json(users);
    
};