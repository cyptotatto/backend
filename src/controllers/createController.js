var userService = require('../services/userService');  
var nftService = require('../services/nftService');
const User = require('../schemas/user');
const Nft = require('../schemas/nft');



const createNFT = {

create: (req, res) => {

    try{

    const fileUpload= req.body.fileUpload;
    const title = req.body.title;
    const link = null;
    const genre = req.body.genre;
    const sell = req.body.sale;
     
    console.log(sell);

    nftService.mintNFT(fileUpload, title, link, genre, sell);

    return res.status(200).json({
    status:200,
    message: "create 성공"
     });

    } catch(err)
    {
    console.log(err);
    throw err;
    }
     

}
};

module.exports = {
    
createNFT
           
};

// module.exports = {
//     createNFT: async (req, res) => {
//         try{
       
//         const nftTitle= req.body.title;
//         //console.log(userAccount);
//         const title =await nftService.mintingNft(nftTitle);
//         // const madeNft =await nftService.getMadeNFT(userAccount);
//         // const soldNft =await transactionService.getSoldNFT(userAccount);
//         // const likeNft =await likeItemService.getLikeNFT(userAccount);

 
        
//        return res.status(200).json({
//             status:200,
//             message: "nft만들기 성공",
//            // data: nftRanking
          
          
//         });
//     }catch(err)
//     {
//         console.log(err);
//         throw err;
//     }
           
//     }


    
// }






