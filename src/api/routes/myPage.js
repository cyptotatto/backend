import express from 'express';
import myPageController from '../controllers/mypage.controller.js';
const router = express.Router();

//UserName(account), 소유NFT 반환
router.get('/:name', myPageController.getMyInformation);
router.put('/edit/:name', myPageController.editMyInformation);

module.exports = router;
