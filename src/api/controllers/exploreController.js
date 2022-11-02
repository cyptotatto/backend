var userService = require('../services/userService');
var nftService = require('../services/nftService');
var transactionService = require('../services/transactionService');

//검색 전 페이지

//기본 정렬 최신순         인기순,최신순,가격낮은순,가격높은순
//도안,이미지 Nft 가져오기
const getSortedItem = async (req, res) => {
  try {
    //인기순, 최신순, 가격 낮은 순만 반환 (높은순은 낮은순 역순으로 해서 사용)
    const tattooNft = await nftService.getSortedNft(true);
    const imageNft = await nftService.getSortedNft(false);
    const user = await userService.getSortedArtist();
  } catch (err) {
    console.log(err);
    throw err;
  }
  return res.status(200).json({
    status: 200,
    message: '타투NFT가져오기 성공',
    tattooDesign: tattooNft,
    tattooImage: imageNft,
    artist: user,
  });
};

//검색 후 페이지
const getNftByGenre = async (req, res) => {
  try {
    const genre = req.params.genre; //사용자가 지정한 장르
    const genreNft = await nftService.searchNftByGenre(genre);

    return res.status(200).json({
      status: 200,
      message: '장르로 검색 성공!',
      nft: genreNft,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const getNftByTheme = async (req, res) => {
  try {
    const theme = req.params.theme; //사용자가 지정한 주제
    const themeNft = await nftService.searchNftByTheme(theme);

    return res.status(200).json({
      status: 200,
      message: '주제로 검색 성공',
      nft: themeNft,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const getNftByPart = async (req, res) => {
  try {
    const part = req.params.part; //사용자가 지정한 주제
    const partNft = await nftService.searchNftByPart(part);

    return res.status(200).json({
      status: 200,
      message: '부위로 검색 성공',
      nft: partNft,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const getNftByGenreAndTheme = async (req, res) => {
  try {
    const genre = req.params.genre; //사용자가 지정한 장르
    const theme = req.params.theme; //사용자가 지정한 주제
    const genreAndThemeNft = await nftService.searchNftByGenreAndTheme(
      genre,
      theme,
    );

    return res.status(200).json({
      status: 200,
      message: '장르와 주제로 검색 성공',
      nft: genreAndThemeNft,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const getArtistByGenre = async (req, res) => {
  try {
    const genre = req.params.genre; //사용자가 지정한 주제
    console.log(genre);
    const searchedArtist = await userService.searchArtistByGenre(genre);

    return res.status(200).json({
      status: 200,
      message: '장르로 아티스트 검색 성공',
      artist: searchedArtist,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  getSortedItem,
  getNftByGenre,
  getNftByTheme,
  getNftByGenreAndTheme,
  getArtistByGenre,
};
