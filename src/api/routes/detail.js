const express = require('express');
const router = express.Router();
const detailController = require('../../controllers/detail.controller');



router.get('/nft',detailController.getNftDetail); 
 

router.get('/artist',detailController.getArtistDetail);

router.get('/buy',detailController.getBuy);

module.exports = router;