const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment');

router.get('/:id', commentCtrl.getComments);
router.post('/', commentCtrl.createComment);
router.put('/:id', commentCtrl.updateComment);
router.delete('/:id', commentCtrl.destroyComment);

module.exports = router;