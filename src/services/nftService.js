var NFT = require('../schemas/NFT')

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

module.exports = {
    getHotNFT: async () => {
        try{
        const hotNft = await NFT.find({});
        return hotNft;
        }catch(err){
            console.log(err);
            throw err;
        }

    }   
}