const express = require('express');
const router = express.Router();
const myPageController = require('../../controllers/myPageController');

//UserName(account), 소유NFT 반환
router.get('/:account',myPageController.getMyNFT);//, function(요청,응답){
//   console.log("testes"); 
//     console.log(요청.params.account);
// });//, (req, res) => {
   // return ;//res.json({ user: req.currentUser }).status(200);
 // });
// //만든NFT 반환
// router.get('/:id/make',  nftController.getMakeNFT, (req, res) => {
//     return ;//res.json({ user: req.currentUser }).status(200);
//   });
// //판매한NFT 반환
// router.get('/:id/sell',  nftController.getSellNFT, (req, res) => {
//     return ;//res.json({ user: req.currentUser }).status(200);
//   });
//개인정보 수정

//회원탈퇴


module.exports = router;
