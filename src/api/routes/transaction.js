
import express from 'express';
const transactionRouter = express.Router();
import Transaction from "../../models/transaction.js";

/**
 * buyerAccount
 * sellerAccount
 * nftId
 * transactionPrice
 */

//거래가 일어났을 때
transactionRouter.post('/', function(req,res){

  const transaction = new Transaction({
    buyerAccount: req.body.buyerAccount,
    sellerAccount: req.body.sellerAccount,
    nftId: req.body.nftId,
    transactionPrice: req.body.transactionPrice
  })
  console.log(transaction);
   transaction.save()
    .then((result) => {

      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
})

// 거래 내역 조회 (sellerAccount로 조회 -> myPage 판매 nft)
//또 무엇으로 조회 해야할까

transactionRouter.get('/list',function(req,res){

     Transaction.find({"sellerAccount" : req.body.sellerAccount})
    .then((transaction) => {

      res.json(transaction);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
});



export default transactionRouter;
