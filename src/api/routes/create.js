const express = require('express');
const router = express.Router();
var createController = require('../../controllers/createController');
//var nftController = require('../../controllers/NftController');

//NFT만들기
router.post('/', createController.insertNFT);

module.exports = router;
