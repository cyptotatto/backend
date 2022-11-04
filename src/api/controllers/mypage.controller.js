var userService = require('../../services/user.service');
var nftService = require('../../services/nft.service');
var transactionService = require('../../services/transaction.service');
var likeItemService = require('../../services/likeItem.service');

module.exports = {
  //소유 ->nft(ownerId), 만든->nft(artistId), 판매한->transaction(sellerAccount) , 좋아요->likeItemSchema(userAccount)
  getMyInformation: async (req, res) => {
    try {
      
      const userAccount = req.params.name;
      //user 정보
      const userInformation = await userService.getUser(userAccount);
      //user와 관련된 nft
      const ownedNft = await nftService.getOwnNFT(userAccount);
      const madeNft = await nftService.getMadeNFT(userAccount);
      const soldNft = await transactionService.getSoldNFT(userAccount);
      const likeNft = await likeItemService.getLikeNFT(userAccount);

      return res.status(200).json({
        status: 200,
        message: 'myPage 가져오기 성공',

        user: userInformation,
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
  editMyInformation: async (req, res) => {
    try {
      
      const userAccount = req.params.name;
      // 닉네임
      // 프로필소개
      // 이메일
      // 대표 장르 선택
      const nickname =req.params.nickname;
      const profileIntro =req.params.profile;
      const emailAddress =req.params.emailAddress;
      const tattooGenre=req.params.genre;
      //user 정보
      await userService.setUser(userAccount,nickname,profileIntro,emailAddress,tattooGenre);

      //user와 관련된 nft
      

      return res.status(200).json({
        status: 200,
        message: 'myPage 수정 성공',
      
      
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
