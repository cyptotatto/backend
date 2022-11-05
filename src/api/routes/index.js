var express = require('express');
var router = express.Router();

//GET home page.
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.use('/users', require('./users'));//나중에 단수로 바꾸기
// router.use('/transaction', require('./transaction'));
router.use('/nft', require('./nft'));
router.use('/home', require('./home'));
router.use('/myPage', require('./myPage'));
router.use('/explore', require('./explore'));
router.use('/create', require('./create'));
router.use('/detail', require('./detail'));

// router.use('/myPage', require('./myPage'));
//router.use('/comment', require('./comment'));

module.exports = router;
