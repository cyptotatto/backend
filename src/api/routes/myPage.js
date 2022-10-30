const express = require('express');
const router = express.Router();
const myPageController = require('../../controllers/myPageController');

//UserName(account), 소유NFT 반환
router.get('/:name',myPageController.getMyInformation);



module.exports = router;
