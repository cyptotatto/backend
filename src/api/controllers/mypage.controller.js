var userService = require('../services/userService');
var nftService = require('../services/nftService');
var transactionService = require('../services/transactionService');
var likeItemService = require('../services/likeItemService');

module.exports = {
  //소유 ->nft(ownerId), 만든->nft(artistId), 판매한->transaction(sellerAccount) , 좋아요->likeItemSchema(userAccount)
  getMyInformation: async (req, res) => {
    try {
      //이름이 unique라면 계좌로 검색안해도 된다. 여쭈어보기
      const userAccount = req.params.name;
      //user 정보
      const userInformaion = await userService.getUser(userAccount);
      //user와 관련된 nft
      const ownedNft = await nftService.getOwnNFT(userAccount);
      const madeNft = await nftService.getMadeNFT(userAccount);
      const soldNft = await transactionService.getSoldNFT(userAccount);
      const likeNft = await likeItemService.getLikeNFT(userAccount);

      return res.status(200).json({
        status: 200,
        message: 'myPage 가져오기 성공',

        user: userInformaion,
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
};
