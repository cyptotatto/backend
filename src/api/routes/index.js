import express from 'express';

let router = express.Router();
import  homeRouter from './home.js';
import  createRouter from './create.js';
import  detailRouter from './detail.js';
import  exploreRouter from './explore.js';
import  myPageRouter from './myPage.js';

//GET home page.

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.use('/users', require('./users'));//나중에 단수로 바꾸기
// router.use('/transaction', require('./transaction'));
//router.use('/nft', require('./nft.js'));
router.use('/home', homeRouter);
router.use('/myPage', myPageRouter);
router.use('/explore', exploreRouter);
router.use('/create', createRouter);
router.use('/detail', detailRouter);

export default router;
