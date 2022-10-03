const express = require('express');
const router = express.Router();
var userController = require('../../controllers/UserController');
var nftController = require('../../controllers/NftController');

//도안 hot 100, 아티스트 hot 100 반환
router.get('/', userController.getHot100User, nftController.getHot100Nft, (req, res) => {
    return ;//res.json({ user: req.currentUser }).status(200);
  });

module.exports = router;
