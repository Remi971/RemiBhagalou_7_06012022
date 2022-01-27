const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const articleCtrl = require('../controllers/article');

router.get('/', articleCtrl.getAllArticles);
router.get('/:id', articleCtrl.getOneArticle);
router.post('/', multer, articleCtrl.createArticle);
router.put('/:id', multer, articleCtrl.updateArticle);
router.delete('/:id', articleCtrl.destroyArticle);

module.exports = router;