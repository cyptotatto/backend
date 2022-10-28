var NFT = require('../schemas/nft')
var User = require('../schemas/user')
var userService =require('./userService')




module.exports = {
    //랭킹 1~100 NFT 가져오기
    getHotNFT: async () => {//rankingController에서 사용
        try{
        const hotNft = await NFT.find({likeCount:{ $gt: -1 } }).limit(100);//좋아요 수가 -1보다 큰것 100개이하로 검색
       
        return hotNft;
        }catch(err){
            console.log(err);
            throw err;
        }

    },
    //소유한 NFT가져오기
    getOwnNFT: async (account) => {//myPageController에서 사용
        try{
        const myNft = await NFT.find({"ownerId" : account });//

       
        return myNft;
        }catch(err){
            console.log(err);
            throw err;
        }

    },
    //만든 NFT 가져오기
    getMadeNFT: async (account) => {//myPageController에서 사용
        try{
        const madeNft = await NFT.find({"artistId": account});
      
        return madeNft;
        }catch(err){
            console.log(err);
            throw err;
        }
    },
    //explore에서 사용할 로직 

    //도안 검색 : 장르별 
    searchNftByGenre: async (nftGenre) => {//myPageController에서 사용
        try{
        const genreNft = await NFT.find({"genre": nftGenre,"sale":true});
      
        return genreNft;
        }catch(err){
            console.log(err);
            throw err;
        }
    },
    
    //도안 검색 : 주제별 
    searchNftByTheme: async (nftTheme) => {//myPageController에서 사용
        try{
            const themeNft = await NFT.find({"theme": nftTheme,"sale":true});
      
            return themeNft;
            }catch(err){
                console.log(err);
                throw err;
            }
    },
    //도안 검색 : 부위별 
    searchNftByPart: async (nftPart) => {//myPageController에서 사용
        try{
            const partNft = await NFT.find({"part": nftPart,"sale":true});
      
            return partNft;
            }catch(err){
                console.log(err);
                throw err;
            }
    },
    //도안 검색 : 장르&주제별 
    searchNftByGenreAndTheme: async (nftGenre,nftTheme) => {//myPageController에서 사용
        try{
        const GandTNft = await NFT.find({"genre": nftGenre,"theme": nftTheme,"sale":true});
      
        return GandTNft;
        }catch(err){
            console.log(err);
            throw err;
        }
    },

    mintNFT: async (fileUploadT, titleT, linkT, genreT, sellT) => {//create에서 사용
        try{
      
        const nft = new NFT({
            title: titleT,
            //link: linkT,
            artistId: "10월 17일",
            ownerId: "10월 18일",
            price: 30000,
            genre: "이레즈미",
            theme: "평화",
            part: "목",//근데 create 일반에선 필수
            sale: true
    
        
          });

          nft.save()
          .then((result) => {
            return result
          })
          .catch((err) => {
            console.error(err);
            next(err);
          })

        }catch(err){
            console.log(err);
            throw err;
        }
    },
    plusNFTLike: async (nftId) => {//myPageController에서 사용
        try{
        //const myNft = await NFT.find({"ownerId" : account });//
        const nft = NFT.find({_id:nftId});
        const artist = nft.artistId;//만든 아티스트 좋아요도 증가해주기
        const count=nft.likeCount;
        await NFT.findByIdAndUpdate(nftId,{
            likeCount: count+1
        });
       
        userService.plusArtistLike(artist); //아티스트 아이디는 유저서비스에서 증가
        }catch(err){
            console.log(err);
            throw err;
        }

    }
    //plusNftLike -> userService.plusArtistLike   이 방법밖에 없을지

     
    
    //
    //    mintingNft
    //nft를 db에 저장

    
    //,
    
    // getHotNFT2: async () => {
    //     try{
    //     const hotNft = await NFT.find({});
    //     console.log(hotNft);
    //     return hotNft;
    //     }catch(err){
    //         console.log(err);
    //         throw err;
    //     }

    // }  
    // exports.getUsers = async function (query, page, limit) {

//     try {
//         var users = await User.find(query)
//         return users;
//     } catch (e) {
//         // Log Errors
//         throw Error('Error while Paginating Users')
//     }
// }

// module.exports = {
//     getHotNFT:function(req,res){
        
//         NFT.find()
//         .then((nfts) => {
//         return nfts;
//         })
//         .catch((err) => {
//         console.error(err);
//         next(err);
//         })
//     }
// }
};

 





//create(){

// createNFT(){
//   createController.save(this.body)
//}
    
// };