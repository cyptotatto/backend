var userService = require('../services/userService');  
var nftService = require('../services/nftService');
var transactionService = require('../services/transactionService');
var likeItemService = require('../services/likeItemService');



module.exports = {//소유 ->nft(ownerId), 만든->nft(artistId), 판매한->transaction(sellerAccount) , 좋아요->likeItemSchema(userAccount)
    getMyNFT: async (req, res) => {
        try{
       
        const userAccount= req.params.account;
        //console.log(userAccount);
        const ownedNft =await nftService.getOwnNFT(userAccount);
        const madeNft =await nftService.getMadeNFT(userAccount);
        const soldNft =await transactionService.getSoldNFT(userAccount);
        const likeNft =await likeItemService.getLikeNFT(userAccount);


        
       return res.status(200).json({
            status:200,
            message: "myPage 가져오기 성공",
           // data: nftRanking
           ownedNFT :ownedNft ,
            madeNFT :madeNft,
           soldNft: soldNft,
          likeNTF: likeNft
          
        });
    }catch(err)
    {
        console.log(err);
        throw err;
    }
           
    }



    
}

