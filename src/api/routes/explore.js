const express = require('express');
const router = express.Router();
var exploreController = require('../../controllers/exploreController');

//검색하기 전 페이지
//기본 정렬 최신순
//도안Nft 가져오기 
router.get('/nft/tattooDesign/:sort',exploreController.getDesignNft);

//타투이미지Nft 가져오기. 아직 x
router.get('/nft/tattooImage/:sort',exploreController.getImageNft);

//아티스트 가져오기. 아직x
router.get('/nft/artist/:sort', exploreController.getThemeNft);


//검색 페이지
// NFT검색:장르
router.get('/nft/genre/:genre',exploreController.getNftByGenre);

//NFT검색:주제
router.get('/nft/theme/:theme', exploreController.getNftByTheme);


//NFT검색:부위
router.get('/nft/part/:part', exploreController.getNftByPart);

//NFT검색: 장르& 주제
router.get('/nft/genretheme/:genre/:theme', exploreController.getNftByGenreAndTheme);

//아티스트 검색:장르
router.get('/artist/genre/:genre', exploreController.getArtistByGenre);


module.exports = router;
