const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config');
const articleCtrl = require('../controllers/article');
const multer =  require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {//indique à multer où enregistrer les fichiers
        callback(null, '../images')
    },
    filename: (req, file, callback) => {//Crée un nouveau nom à partr du nom d'origine
        console.log('file', file);
        let name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        if (/\.[a-z]{2,4}$/.test(name)) {// vérifie si une extension est déjà présente !
            name = name.replace(/\.[a-z]{2,4}$/, '');
        }
        callback(null, name + Date.now() + '.' + extension);
    }
});

const upload = multer({ dest: 'images/' });

router.get('/', auth, articleCtrl.getAllArticles);
router.get('/:id', auth, articleCtrl.getOneArticle);
router.post('/', auth, upload.single('image'), articleCtrl.createArticle);
router.put('/:id', auth, upload.single('image'), articleCtrl.updateArticle);
router.delete('/:id', auth, articleCtrl.destroyArticle);

module.exports = router;