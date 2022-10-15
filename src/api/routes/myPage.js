const express = require('express');
const router = express.Router();
const myPageController = require('../../controllers/myPageController');

//UserName(account), 소유NFT 반환
router.get('/:name',myPageController.getMyNFT);//, function(요청,응답){
//   console.log("testes"); 
//     console.log(요청.params.account);
// });//, (req, res) => {
   // return ;//res.json({ user: req.currentUser }).status(200);
 // });

//개인정보 수정

//회원탈퇴


module.exports = router;
