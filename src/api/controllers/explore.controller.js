import * as userService from '../../services/user.service.js';
import * as nftService from '../../services/nft.service.js';
import * as transactionService from '../../services/transaction.service.js';
//검색 전 페이지

//기본 정렬 최신순         인기순,최신순,가격낮은순,가격높은순
//도안,이미지 Nft 가져오기
const getSortedItem = async (req, res) => {
  try {
    //인기순, 최신순, 가격 낮은 순만 반환 (높은순은 낮은순 역순으로 해서 사용)
    const tattooNft = await nftService.getSortedNft(true);
    const imageNft = await nftService.getSortedNft(false);
    const user = await userService.getSortedArtist();

    return res.status(200).json({
      status: 200,
      message: '타투NFT가져오기 성공',
      tattooDesign: tattooNft,
      tattooImage: imageNft,
      artist: user,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
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
    const part = req.params.part; 
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

//explore에서 nft 검색
const getNftKeywords = async (req, res) => {
  try {
    let searchQuery = {};
    let searchKeyWords=[];
    //true :도안,false:이미지
    //tattooDesign이 지금 없어서 잠시 주석 처리
    // if(tattooDesign)
    //   searchKeyWords.push({  tattooDesign: true});
    // else
    //  searchKeyWords.push({  tattooDesign: false});
    if(req.query.genre)
      searchKeyWords.push({ genre: req.query.genre });
    if(req.query.theme)
      searchKeyWords.push({ theme: req.query.theme });
    if(req.query.part)
      searchKeyWords.push({ part: req.query.part });    
    searchQuery={searchKeyWords};
    const searchedNft = await nftService.searchNftByKeywords(searchQuery);
    

    return res.status(200).json({
      status: 200,
      message: '타투 도안 검색 성공',
      nft :searchedNft
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const  getArtistKeywords = async (req, res) => {
  try {
    let searchQuery = {};
    let searchKeyWords=[];
    if(req.query.genre)
      searchKeyWords.push({ genre: req.query.genre });
    searchQuery={$and:searchKeyWords};
   
    const searchedArtist = await userService.searchArtistByKeywords(searchQuery);
    
    return res.status(200).json({
      status: 200,
      message: '아티스트 검색 성공',
      artist :searchedArtist
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export {
  getSortedItem,
  getNftByGenre,
  getNftByTheme,
  getNftByPart,
  getNftByGenreAndTheme,
  getArtistByGenre,
  getNftKeywords,
  getArtistKeywords
};
