import express from 'express';//시스템 모듈

import  homeRouter from './home.js'; //사용자 모듈
import  createRouter from './create.js';
import  detailRouter from './detail.js';
import  exploreRouter from './explore.js';
import  myPageRouter from './myPage.js';

let router = express.Router();
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
