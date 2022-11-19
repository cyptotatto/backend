import express from 'express';
const myPageRouter= express.Router();
import upload from '../middlewares/ImageUploader.js';

import * as myPageController from '../controllers/mypage.controller.js';


//UserName(account), 소유NFT 반환
myPageRouter.get('/:account/:type', myPageController.getMyInformation);
//개인 정보 수정
myPageRouter.post('/edit/:account',upload.fields([
  { name: 'bannerImg' },
  { name: 'profileImg' }]),myPageController.editMyInformation);

//single,array:하나의 인풋 여러개의 파일 업로드,fields 여러개 인풋 각각 하나의 파일 업로드
 //myPageRouter.post('/edit/:account',upload.array('userImg'),myPageController.editMyInformation);

 // myPageRouter.post('/edit/:account',upload.single('image'),myPageController.editMyInformation);
//   (req, res) => {
  
//     console.log(req.files); 
//     console.log(req.files["bannerImg"]); 

// })

//.fields([
  // { name: 'bannerImg' },
  // { name: 'profileImg' }])
export default myPageRouter;
