<<<<<<< HEAD
import express from 'express';
import myPageController from '../controllers/mypage.controller.js';
let router = express.Router();
=======
const express = require('express');
const router = express.Router();
const myPageController = require('../../controllers/myPage.controller');
>>>>>>> e2e632f (feat: Detail,Create logic)

//UserName(account), 소유NFT 반환
router.get('/:name', myPageController.getMyInformation);
router.put('/edit/:name', myPageController.editMyInformation);

module.exports = router;
