const express = require('express');
const router = express.Router();
var createController = require('../../controllers/create.controller');
//var nftController = require('../../controllers/NftController');

//NFT만들기


router.post('/illustration', createController.createNFT1.create);


router.post('/pict', createController.createNFT2.create);

 

module.exports = router;

