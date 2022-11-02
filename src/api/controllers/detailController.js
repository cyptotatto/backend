var userService = require('../services/userService');
var nftService = require('../services/nftService');
var transactionService = require('../services/transactionService');

module.exports = {
  getArtistDetail: async (req, res) => {
    try {
      const userAccount = req.params.name;
      //console.log(userAccount);
      const ownedNft = await nftService.getOwnNFT(userAccount);
      const madeNft = await nftService.getMadeNFT(userAccount);
      const soldNft = await transactionService.getSoldNFT(userAccount);
      const likeNft = await likeItemService.getLikeNFT(userAccount);

      return res.status(200).json({
        status: 200,
        message: 'detail 가져오기 성공',
        // data: nftRanking
        ownedNFT: ownedNft,
        madeNFT: madeNft,
        soldNft: soldNft,
        likeNTF: likeNft,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  getNftDetail: async (req, res) => {
    try {
      const nftId = req.params.nftId;

      const nft = await nftService.getNFT(nftId); //nft이름 변경?

      return res.status(200).json({
        status: 200,
        message: 'detail 가져오기 성공',
        // data: nftRanking
        nftId: nft,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
