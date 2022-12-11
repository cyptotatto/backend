import * as userService from '../../services/user.service.js';
import * as nftService from '../../services/nft.service.js';
import * as transactionService from '../../services/transaction.service.js';
import * as likeItemService from '../../services/likeItem.service.js';

//좋아요 증가
export async function upLike (req, res)  {
    try {
      
     // const nftRanking = await nftService.getHotNFT(); //nft top100
     
       
        const account = req.params.userAccount;
        const mode = req.params.mode;
        const objectId = req.params.objectId;
        console.log("obj: "+ objectId);
       likeItemService.setLike(account,mode,objectId);

      return res.status(200).json({
        status: 200,
        message: '좋아요 증가',
       
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }