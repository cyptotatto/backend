const express = require('express');
const router = express.Router();
var createController = require('../../controllers/createController');
//var nftController = require('../../controllers/NftController');

//NFT만들기

router.post('/', createController.createNFT.create);
//router.post('/create/사진', createController.createNFT.create());//,(req, res) => {
//,(req, res) => {


 

module.exports = router;


 