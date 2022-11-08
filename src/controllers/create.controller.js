var userService = require('../services/userService');  
var nftService = require('../services/nftService');
const User = require('../schemas/user');
const Nft = require('../schemas/nft');



const createNFT1 = {

create: async (req, res) => {

    try{

    const fileUpload= req.body.fileUpload;
    const title = req.body.title;
    const link = null;
    const genre = req.body.genre;
    const theme = req.body.theme;
    const sell = req.body.sale;
     
    console.log(sell);

    await nftService.mintNFT(fileUpload, title, link, genre, theme, sell);

    return res.status(200).json({
    status:200,
    message: "create도안 성공",
    sell: sell// 프론트에서 보낸값을 받아줌
     });


    } catch(err)
    {
    console.log(err);
    throw err;
    }
     

}


}
const createNFT2 = {

    create: async (req, res) => {
    
        try{
    
            const fileUpload= req.body.fileUpload;
            const title = req.body.title;
            const link = null;
            const genre = req.body.genre;
            const theme = req.body.theme;
            const part = req.body.part;
            const sell = req.body.sale;
         
        console.log(sell);
    
        await nftService.mintNFT(fileUpload, title, link, genre, theme, part, sell);
    
        return res.status(200).json({
        status:200,
        message: "create 사진 성공",
        sell: sell// 프론트에서 보낸값을 받아줌

         });
    
        } catch(err)
        {
        console.log(err);
        throw err;
        }
         
    
    }
    
    
    };








module.exports = {
    
createNFT1,
createNFT2
           
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






