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

  //좋아하는 nft
export async function getLikeNft (req, res)  {
  try {
    const userAccount = req.params.userAccount;
   
    let likeNftIdList;
    let likeNft;
    likeNftIdList= await likeItemService.getLikeNftList(userAccount);
    likeNft=await nftService.getLikeNFT(likeNftIdList);
    return res.status(200).json({
      status: 200,
      message: '좋아하는 nft 가져오기 성공',
      nft: likeNft
    
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

//좋아하는 아티스트
export async function getLikeArtist (req, res)  {
  try {
    const userAccount = req.params.userAccount;
    let likeArtistIdList;
    let likeArtist; 
    likeArtistIdList= await likeItemService.getLikeArtist(userAccount);
    likeArtist=await userService.getLikeArtist(likeArtistIdList);
    
    return res.status(200).json({
      status: 200,
      message: '좋아하는 아티스트 가져오기 성공',
      artist: likeArtist
    
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}