import * as userService from '../../services/user.service.js';

import * as nftService from '../../services/nft.service.js';

export const registerUser = async (req, res) => {
  try {
    const userAccount = req.body.userAccount;

    await userService.insertUser(userAccount);

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
    console.log('test  ' + req.body);
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
