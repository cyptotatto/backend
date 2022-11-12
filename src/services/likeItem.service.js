import likeItemList from '../models/likeItemList.js';



export async function getLikeNFT (account)  {
    try {
      const likeNft = await likeItemList.find({ userAccount: account });
      return likeNft;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


