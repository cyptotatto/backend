var NFT = require('../schemas/nft')
var User = require('../schemas/user')



module.exports = {
    //랭킹 1~100 NFT 가져오기
    getHotNFT: async () => {//rankingController에서 사용
        try{
        const hotNft = await NFT.find({});
       
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
    }
    
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
}