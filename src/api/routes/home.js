const express = require('express');
const router = express.Router();
// var userController = require('../../controllers/UserController');
// var nftController = require('../../controllers/NftController');
var rankingController = require('../../controllers/rankingController');


//도안 hot 100, 아티스트 hot 100 반환
router.get('/', rankingController.getHotItem);//,(req, res));

module.exports = router;
