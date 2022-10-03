const express = require('express');
const router = express.Router();
var userController = require('../../controllers/UserController');
var nftController = require('../../controllers/NftController');


router.get('/', userController.doGetHot100User, nftController.doGetHot100Nft, (req, res) => {
    return res.json({ user: req.currentUser }).status(200);
  });

module.exports = router;
