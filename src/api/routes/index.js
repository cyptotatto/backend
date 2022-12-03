import express from 'express';//시스템 모듈

import  homeRouter from './home.js'; //사용자 모듈
import  detailRouter from './detail.js';
import  exploreRouter from './explore.js';
import  myPageRouter from './myPage.js';

import { default as ntfRouter } from './nfts.js';
import { default as artistRouter } from './artists.js';


let router = express.Router();
//GET home page.

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.use('/users', require('./users'));//나중에 단수로 바꾸기
// router.use('/transaction', require('./transaction'));
//router.use('/nft', require('./nft.js'));

router.use('/myPage', myPageRouter);
router.use('/explore', exploreRouter);
router.use('/nfts', ntfRouter);
router.use('/artists', artistRouter);
// router.use('/detail', detailRouter);

//router.use('/nfts/ranking', rankingController) 혜온님 이어서
//router.use('/artists/ranking', rankingController) 혜온님 이어서
//router.use('/home', homeRouter);
export default router;
