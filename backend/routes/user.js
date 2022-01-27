const express = require("express");
const router = express.Router();
const userCtrl = require('../controllers/user');

// router.post('/', userCtrl.login);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//Pour TEST
router.get('/getUsers', userCtrl.getUsers);

module.exports = router;