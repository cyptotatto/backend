//api테스트용
// const express = require('express');
// const router = express.Router();
// const Transaction = require('../../schemas/transaction');

// /**
//  * buyerAccount
//  * sellerAccount
//  * nftId
//  * transactionPrice
//  */

// //거래가 일어났을 때
// router.post('/', function(req,res){

//   const transaction = new Transaction({
//     buyerAccount: req.body.buyerAccount,
//     sellerAccount: req.body.sellerAccount,
//     nftId: req.body.nftId,
//     transactionPrice: req.body.transactionPrice
//   })
//   console.log(transaction);
//    transaction.save()
//     .then((result) => {

//       res.json(result);
//     })
//     .catch((err) => {
//       console.error(err);
//       next(err);
//     })
// })

// // 거래 내역 조회 (sellerAccount로 조회 -> myPage 판매 nft)
// //또 무엇으로 조회 해야할까

// router.get('/list',function(req,res){

//      Transaction.find({"sellerAccount" : req.body.sellerAccount})
//     .then((transaction) => {

//       res.json(transaction);
//     })
//     .catch((err) => {
//       console.error(err);
//       next(err);
//     })
// });

// //거래 기록을 업데이트하고 삭제하는 기능이 필요할까?

// module.exports = router;
