import express from 'express';
const nftRouter = express.Router();
import * as nftController from '../controllers/nft.controller.js';

import upload from '../middlewares/ImageUploader.js';




/**
 * title
 * link
 * artistId
 * ownerId
 * price
 * likeCount
 * genre
 * theme
 * part
 * createdAt
 */
//POST method 
//nftRouter.post("/create" , upload.single('image'),nftController.createNft);
nftRouter.post("/create" ,nftController.createNft);


// nftRouter.post("/minting", function (req, res) {
//   //민팅할때는 소유자와 아티스트의 아이디가 같다.
//   const nft = new NFT({
//     title: req.body.title,
//     link: req.body.link,
//     explanation:req.body.explanation,
//     tattooDesign:req.body.tattooDesign,
//     userAccount: req.body.userAccount,
//     artistId: req.body.artistID,
//     price: req.body.price,
//     genre: req.body.genre,
//     theme: req.body.theme,
//     part: req.body.part,
//     sale: req.body.sale,
//   });

//   nft
//     .save()
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((err) => {
//       console.error(err);
//       next(err);
//     });
// });

export default nftRouter;

// 장르별 ,주제별, 부위별 검색 기능
//소유자 이름, 아티스트 이름으로 검색 기능
//좋아요 정렬 어떻게 할 것인지 생각하기 (실시간 반영)
//아티스트 스키마에도 좋아요 카운트 추가해야한다.


