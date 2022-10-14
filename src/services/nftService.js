var NFT = require('../schemas/NFT')


module.exports = {
    getHotNFT: async () => {//rankingController에서 사용
        try{
        const hotNft = await NFT.find({});
       
        return hotNft;
        }catch(err){
            console.log(err);
            throw err;
        }

    },
    getOwnNFT: async (account) => {//myPageController에서 사용
        try{
        const myNft = await NFT.find({"ownerId" : account });//

       
        return myNft;
        }catch(err){
            console.log(err);
            throw err;
        }

    },
    getMadeNFT: async (account) => {//myPageController에서 사용
        try{
        const madeNft = await NFT.find({"artistId": account});
      
        return madeNft;
        }catch(err){
            console.log(err);
            throw err;
        }
    //    mintingNft
    //nft를 db에 저장

    }
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