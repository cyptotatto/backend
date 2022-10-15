const express = require('express');
const router = express.Router();
var exploreController = require('../../controllers/exploreController');


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
