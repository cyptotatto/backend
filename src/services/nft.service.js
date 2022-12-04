import Nft from '../models/nft.js';




export async function insertNft(
  awsUrlT,
  titleT,
  linkT,
  explanationT,
  tattooDesignT,
  holderT,
  artistAccountT,
  genreT,
  themeT,
  partT,
  saleT,
  priceT)  {
  try {

    const nft = new Nft({
      awsUrl:awsUrlT,
      title:titleT,
      link:linkT,
      explanation:explanationT,
      tattooDesign:tattooDesignT,
      holder:holderT,
      artistAccount:artistAccountT,
      genre:genreT,
      theme:themeT,
      part:partT,
      sale:saleT,
      price:priceT
    });
  
    await nft.save() // db에 user 저장
    .then((result) => {
           return result;
          })
          .catch((err) => {
            console.error(err);
            next(err);
          });

    //   nft
//     .save()
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((err) => {
//       console.error(err);
//       next(err);
//     });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

  //타투 NFT 가져오기
  export async function getSortedNft (tattooDesign)  {
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
  }
  //랭킹 1~100 NFT 가져오기
  export async function getHotNFT ()  {
    //rankingController에서 사용
    try {
      const hotNft = await NFT.find({ likeCount: { $gt: -1 } }).limit(100); //좋아요 수가 -1보다 큰것 100개이하로 검색

      return hotNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  //소유한 NFT가져오기
  export async function getOwnNFT (account)  {
    //myPageController에서 사용
    try {

      let myNft=new Object();;
      myNft.latest = await NFT.find({ ownerAccount: account }).sort( { _id: -1 } ); //최신순
      myNft.highPrice = await NFT.find({ price: { $gt: 0 } , ownerAccount: account }); //가격 높은 순
     // myNft.lowPrice =myNft.highPrice.reverce(); //가격 낮은 순



      return myNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  //만든 NFT 가져오기
  export async function getMadeNFT (account)  {
    //myPageController에서 사용
    try { 
 
      let madeNft=new Object();
      madeNft.latest = await NFT.find({artistAccount: account}).sort( { _id: -1 } ); //최신순
      
      madeNft.highPrice = await NFT.find({ price: { $gt: -1 } ,  artistAccount: account  }); //가격 높은 순
      //madeNft.lowPrice =madeNft.highPrice.reverce();
      
     
 
      return madeNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  //explore에서 사용할 로직

  //도안 검색 : 장르별
  export async function searchNftByGenre (nftGenre)  {
    //myPageController에서 사용
    try {
      const genreNft = await NFT.find({ genre: nftGenre, sale: true });

      return genreNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  //도안 검색 : 주제별
  export async function searchNftByTheme (nftTheme)  {
    //myPageController에서 사용
    try {
      const themeNft = await NFT.find({ theme: nftTheme, sale: true });

      return themeNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  //도안 검색 : 부위별
  export async function searchNftByPart (nftPart)  {
    //myPageController에서 사용
    try {
      const partNft = await NFT.find({ part: nftPart, sale: true });

      return partNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  //도안 검색 : 장르&주제별
  export async function searchNftByGenreAndTheme (nftGenre, nftTheme)  {
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
  }
  //nft 검색
  export async function searchNftByKeywords (searchQuery)  {
    
    try {
      let nft=new Object();
       nft.likeCount = await NFT.find(searchQuery).sort( { likeCount: -1 } ); //인기순;
       nft.latest = await NFT.find(searchQuery).sort( { _id: -1 } ); //최신순;
       nft.highPrice = await NFT.find(searchQuery).sort( { price: -1 } ); //가격높은순;
       nft.lowPrice = await NFT.find(searchQuery).sort( { price: 1 } ); //가격높은순;

  
      return nft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  export async function mintNFT (fileT, titleT, linkT, explanationT, sortT, genreT, themeT, partT, saleT,priceT,)  {
    //create에서 사용
    try {
      const nft = new NFT({
        file: fileT,
        title: titleT,
        link: linkT,
        explanation: explanationT,
        //artistId: '',
        //ownerId: '',
        sort: sortT,
        genre: genreT,
        theme: themeT,
        part: partT,  
        sale: saleT,
        price: priceT,
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
  }
  export async function getNFT (nftId)  {
    //detailController에서 사용
    try {
      const nft = await NFT.find({ _id: nftId }); //

      return nft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  // export async function plusNFTLike (nftId)  {
  //   //myPageController에서 사용
  //   try {
  //     //const myNft = await NFT.find({"ownerId" : account });//
  //     const nft = NFT.find({ _id: nftId });
  //     const artist = nft.artistAccount; //만든 아티스트 좋아요도 증가해주기
  //     const count = nft.likeCount;
  //     await NFT.findByIdAndUpdate(nftId, {
  //       likeCount: count + 1,
  //     });

  //     userService.plusArtistLike(artist); //아티스트 아이디는 유저서비스에서 증가
  //   } catch (err) {
  //     console.log(err);
  //     throw err;
  //   }
  // }


