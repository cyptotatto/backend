const express = require('express');
const router = express.Router();
var userController = require('../../controllers/UserController');
var nftController = require('../../controllers/NftController');

//NFT만들기
router.post('/', nftController.insertNFT, (req, res) => {
    return ;//res.json({ user: req.currentUser }).status(200);
  });

module.exports = router;
