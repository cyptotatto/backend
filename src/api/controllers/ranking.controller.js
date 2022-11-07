import userService from '../../services/user.service.js';
import nftService from '../../services/nft.service.js';



module.exports = {
  getHotItem: async (req, res) => {
    try {
      const artistRanking = await userService.getHotArtist(); //아티스트 top 100
      const nftRanking = await nftService.getHotNFT(); //nft top100

      return res.status(200).json({
        status: 200,
        message: '랭킹 가져오기 성공',
        // data: nftRanking
        artistTop100: artistRanking,
        nftTop100: nftRanking,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
