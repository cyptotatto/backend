import express from 'express';
const exploreRouter = express.Router();

import * as exploreController from '../controllers/explore.controller.js';

//검색하기 전 페이지
//기본 정렬 최신순
//도안Nft,사진nft,artist 가져오기
//exploreRouter.get('/', exploreController.getSortedItem);

// //타투이미지Nft 가져오기. 아직 x
// exploreRouter.get('/nft/tattooImage/:sort',exploreController.getImageNft);

// //아티스트 가져오기. 아직x
// exploreRouter.get('/nft/artist/:sort', exploreController.getThemeNft);

//검색 페이지
// NFT검색:장르
// exploreRouter.get('/nft/genre/:genre', exploreController.getNftByGenre);

// //NFT검색:주제
// exploreRouter.get('/nft/theme/:theme', exploreController.getNftByTheme);

// //NFT검색:부위
// exploreRouter.get('/nft/part/:part', exploreController.getNftByPart);

// //NFT검색: 장르& 주제
// exploreRouter.get(
//   '/nft/genretheme/:genre/:theme',
//   exploreController.getNftByGenreAndTheme,
// );

// //아티스트 검색:장르
// exploreRouter.get('/artist/genre/:genre', exploreController.getArtistByGenre);

//통합 검색: 타투
exploreRouter.get('/nft', exploreController.getNftKeywords);
//통합 검색: 아티스트
exploreRouter.get('/artist', exploreController.getArtistKeywords);

export default exploreRouter;
