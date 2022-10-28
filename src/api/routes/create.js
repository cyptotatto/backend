const express = require('express');
const router = express.Router();
var createController = require('../../controllers/createController');
//var nftController = require('../../controllers/NftController');

//NFT만들기


router.post('/illustration', createController.createNFT.create);


router.post('/pict', createController.createNFT.create);

 

module.exports = router;

