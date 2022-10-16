const express = require('express');
const router = express.Router();
var createController = require('../../controllers/createController');
//var nftController = require('../../controllers/NftController');

//NFT만들기
<<<<<<< HEAD
router.post('/create', createController.createNFT.create());
//router.post('/create/사진', createController.createNFT.create());//,(req, res) => {
//,(req, res) => {
=======
router.post('/create', createController.createNFT.create)//,(req, res) => {
>>>>>>> 48a67b05b53baba9d6901e7e8a60de88df47c58c
//return ;
//});

 

module.exports = router;


 