const express = require("express");
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/infoUsers/:id', auth, userCtrl.infoUser);
router.delete('/:id', userCtrl.deleteUser);

//Pour TEST
router.get('/getUsers', userCtrl.getUsers);

module.exports = router;