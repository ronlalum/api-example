const express = require('express');
const router = express.Router();

const upload = require('../middelwares/upload');
const checkAuth = require('../middelwares/checkAuth');


const { getAllArticles, createArticle, updateArticle, deleteArticle, getArticle } = require('../controllers/articles')

router.get('/', getAllArticles);
router.get('/:articleId', getArticle);
router.post('/', checkAuth, upload.single('image'), createArticle);
router.patch('/:articleId', checkAuth, updateArticle);
router.delete('/:articleId', checkAuth, deleteArticle);

module.exports = router