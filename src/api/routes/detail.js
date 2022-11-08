import express from 'express';
let router = express.Router();
import detailController from '../controllers/detail.controller.js';

router.get('/nft', detailController.getNftDetail);

router.get('/artist', detailController.getArtistDetail);


router.get('/nft',detailController.getNftDetail); 
 

router.get('/artist',detailController.getArtistDetail);

router.get('/buy',detailController.getBuy);

module.exports = router;
