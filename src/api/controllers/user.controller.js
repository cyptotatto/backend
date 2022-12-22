import * as userService from '../../services/user.service.js';

import * as nftService from '../../services/nft.service.js';
import * as transactionService from '../../services/transaction.service.js';
import * as likeItemService from '../../services/likeItem.service.js';

export const registerUser = async (req, res) => {
  try {
    const account = req.params.account;
    console.log('dddd ' + req.body.a);
    await userService.insertUser(account);

    return res.status(200).json({
      status: 200,
      message: '회원가입성공',
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export async function getUserRanking(req, res) {
  try {
    const userRanking = await userService.getHotArtist(); //nft top100

    return res.status(200).json({
      status: 200,
      message: '랭킹 가져오기 성공',
      userTop100: userRanking,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getMyInformation(req, res) {
  try {
    const userAccount = req.params.account;
    //user 정보
    const userInformation = await userService.getUser(userAccount);

    return res.status(200).json({
      status: 200,
      message: 'myPage 가져오기 성공',

      user: userInformation,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}
//explore에서 검색
export const getArtistKeywords = async (req, res) => {
  try {
    let searchQuery = {};
    let searchKeyWords = [];
    if (req.query.genre) searchKeyWords.push({ genre: req.query.genre });
    searchQuery = { $and: searchKeyWords };
    console.log('???');
    const searchedArtist = await userService.searchArtistByKeywords(
      searchQuery,
    );

    return res.status(200).json({
      status: 200,
      message: '아티스트 검색 성공',
      artist: searchedArtist,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export async function getArtistDetail(req, res) {
  try {
    const userAccount = req.params.account;
    //console.log(userAccount);
    const ownedNft = await nftService.getOwnNFT(userAccount);
    const madeNft = await nftService.getMadeNFT(userAccount);
    const soldNft = await transactionService.getSoldNFT(userAccount);
    const likeNft = await likeItemService.getLikeNftList(userAccount);
    const likeArtist = await likeItemService.getLikeArtist(userAccount);

    return res.status(200).json({
      status: 200,
      message: 'detail 가져오기 성공',
      // data: nftRanking
      ownedNFT: ownedNft,
      madeNFT: madeNft,
      soldNft: soldNft,
      likeNTF: likeNft,
      likeARTIST: likeArtist,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// const process = {
//   login: (req, res) => {
//     const id = req.body.id.body,
//       psword = req.body.pasword;

//     if (users.id.includes(id)) {
//       const idx = users.id.indexOf(id);
//       if (users.pasword[ids] === psword) {
//         return res.json({
//           sucess: true,
//         });
//       }
//     }

//     return res.json({
//       success: false,
//       msg: '로그인에 실패했습니다.',
//     });
//   },
// };
