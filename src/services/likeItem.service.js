import likeItemList from '../models/likeItemList.js';



export async function getLikeNFT (account)  {
    try {
      const likeNft = await likeItemList.find({ userAccount: account }); //최신순,인기순 해야함 populate
      return likeNft.nfts;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  export async function getLikeArtist (account)  {
    try {
      const likeNft = await likeItemList.find({ userAccount: account });
      return likeNft.artists;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


