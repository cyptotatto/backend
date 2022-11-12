import express from 'express';
const myPageRouter= express.Router();

import * as myPageController from '../controllers/mypage.controller.js';


//UserName(account), 소유NFT 반환
myPageRouter.get('/:name', myPageController.getMyInformation);
myPageRouter.put('/edit/:name', myPageController.editMyInformation);

export default myPageRouter;
