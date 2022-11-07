import NFT from '../models/nft.js';
import User from'../models/user.js';
import userService from '../services/user.service.js';

module.exports = {
  //타투 NFT 가져오기
  getSortedNft: async tattooDesign => {
    //rankingController에서 사용
    try {
      // 프론트에서 필터링 시 이 코드 그대로 ,백에서 필터링 시 아래 검새코드하고 합치기
      const nft = new Object();
      if (tattooDesign) {
        nft.popularity = await NFT.find({
          tattooDesign: true,
          likeCount: { $gt: -1 },
        });
        nft.latest = await NFT.find().sort({
          tattooDesign: true,
          createdAt: -1,
        });
        nft.highPrice = await NFT.find({
          tattooDesign: true,
          price: { $gt: -1 },
        });
      } else {
        nft.popularity = await NFT.find({
          tattooDesign: false,
          likeCount: { $gt: -1 },
        });
        nft.latest = await NFT.find({ tattooDesign: false }).sort({
          createdAt: -1,
        });
        nft.highPrice = await NFT.find({
          tattooDesign: false,
          price: { $gt: -1 },
        });
      }

      return nft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  //랭킹 1~100 NFT 가져오기
  getHotNFT: async () => {
    //rankingController에서 사용
    try {
      const hotNft = await NFT.find({ likeCount: { $gt: -1 } }).limit(100); //좋아요 수가 -1보다 큰것 100개이하로 검색

      return hotNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  //소유한 NFT가져오기
  getOwnNFT: async account => {
    //myPageController에서 사용
    try {
      const myNft = await NFT.find({ ownerId: account }); //

      return myNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  //만든 NFT 가져오기
  getMadeNFT: async account => {
    //myPageController에서 사용
    try {
      const madeNft = await NFT.find({ artistId: account });

      return madeNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  //explore에서 사용할 로직

  //도안 검색 : 장르별
  searchNftByGenre: async nftGenre => {
    //myPageController에서 사용
    try {
      const genreNft = await NFT.find({ genre: nftGenre, sale: true });

      return genreNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  //도안 검색 : 주제별
  searchNftByTheme: async nftTheme => {
    //myPageController에서 사용
    try {
      const themeNft = await NFT.find({ theme: nftTheme, sale: true });

      return themeNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  //도안 검색 : 부위별
  searchNftByPart: async nftPart => {
    //myPageController에서 사용
    try {
      const partNft = await NFT.find({ part: nftPart, sale: true });

      return partNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  //도안 검색 : 장르&주제별
  searchNftByGenreAndTheme: async (nftGenre, nftTheme) => {
    //myPageController에서 사용
    try {
      const GandTNft = await NFT.find({
        genre: nftGenre,
        theme: nftTheme,
        sale: true,
      });

      return GandTNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  mintNFT: async (fileUploadT, titleT, linkT, genreT, sellT) => {
    //create에서 사용
    try {
      const nft = new NFT({
        title: titleT,
        //link: linkT,

        artistId: '10월 17일',
        ownerId: '10월 18일',
        price: 30000,
        genre: '이레즈미',
        theme: '평화',
        part: '목', //근데 create 일반에선 필수
        sale: true,
      });

      nft
        .save()
        .then(result => {
          return result;
        })
        .catch(err => {
          console.error(err);
          next(err);
        });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  getNft: async nftId => {
    //detailController에서 사용
    try {
      const nft = await NFT.find({ _id: nftId }); //

      return nft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  plusNFTLike: async nftId => {
    //myPageController에서 사용
    try {
      //const myNft = await NFT.find({"ownerId" : account });//
      const nft = NFT.find({ _id: nftId });
      const artist = nft.artistAccount; //만든 아티스트 좋아요도 증가해주기
      const count = nft.likeCount;
      await NFT.findByIdAndUpdate(nftId, {
        likeCount: count + 1,
      });

      userService.plusArtistLike(artist); //아티스트 아이디는 유저서비스에서 증가
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  //plusNftLike -> userService.plusArtistLike   이 방법밖에 없을지
};
