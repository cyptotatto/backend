import User from '../models/user.js';
import likeItemList from '../models/likeItemList.js';

//let utils = require('util');

export async function insertUser(userAccount) {
  try {
    const user = new User({
      account: userAccount,
    });
    //컨트롤러에서 호출해야하나?
    const likeItem = new likeItemList({
      userAccount: userAccount,
    });
    await user.save(); // db에 user 저장
    await likeItem.save();
  } catch (err) {
    console.log(err);
    throw err;
  }
}
// myPage에서 사용

export async function getUser(userAccount) {
  try {
    const userInformaion = await User.find({ account: userAccount });
    return userInformaion;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
//edit
export async function setUser(
  userAccount,
  bannerImagePath,
  profileImagePath,
  nickname,
  profileIntro,
  emailAddress,
  tattooGenre,
) {
  try {
    // const userInformaion = await User.find({ account: userAccount });
    //const userInformaion = await User.find({ account: "07380aasss9007dd3347" });
    //console.log("dddd "+ userAccount);
    await User.updateOne(
      { account: userAccount },
      {
        // "$set": {
        bannerImgPath: bannerImagePath,
        profileImgPath: profileImagePath,
        name: nickname,
        profile: profileIntro,
        email: emailAddress,
        genre: tattooGenre,
      },
      function (err, res) {
        if (err) {
          throw error;
        }
        console.log('1 document 수정 완료.');
        console.log(res.result);
      },
    ).clone();
  } catch (err) {
    console.log(err);
    throw err;
  }
}
//explore에서 사용
export async function getSortedArtist() {
  try {
    const artist = await User.find({ likeCount: { $gt: -1 } });
    return artist;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
//home에서 사용
export async function getHotArtist() {
  try {
    const HotArtist = await User.find({ likeCount: { $gt: -1 } }).limit(100); //좋아요 수가 -1보다 큰것 100개이하로 검색
    return HotArtist;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function getUserAccount(userName) {
  try {
    const HotArtist = await User.findOne({ name: userName });
    return HotArtist.account.toString;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
//explore : 아티스트 검색 : 장르별 (1개)
export async function searchArtistByGenre(artistGenre) {
  //myPageController에서 사용
  try {
    const artist = await User.find({ genre: artistGenre });

    return artist;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function searchArtistByKeywords(searchQuery) {
  try {
    let artist = new Object();
    artist.likeCount = await User.find(searchQuery).sort({ likeCount: -1 }); //인기순
    artist.latest = await User.find(searchQuery).sort({ _id: -1 }); //최신순

    return artist;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

//좋아하는 artist정보 가져오기
export async function getLikeArtist(likeArtistIdList) {
  let likeArtist = [];
  try {
    for (const id of likeArtistIdList) {
      likeArtist.push(await User.find({ account: id })); //최신순
    }

    return likeArtist;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
// plusArtistLike: async artist => {
//   //myPageController에서 사용
//   try {
//     //더 간단한 방법 없는지 찾아보기
//     const user = await User.find({ account: artist });
//     const count = user.likeCount;

//     await User.findByIdAndUpdate(nftId, {
//       likeCount: count + 1,
//     });
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// }
//}

//};
//plusArtistLike

// return new Promise(async (resolve, reject) => {
//     const HotArtist = await User.find({});
//     console.log("service "+HotArtist );
//     if(HotArtist.length == 0) {
//         resolve({
//             json: utils.successFalse(sc.NO_CONTENT, rm.CITY_EMPTY)
//         });
//         return;
//     }
//     if (!HotArtist) {
//         resolve({
//             json: utils.successFalse(sc.INTERNAL_SERVER_ERROR, rm.CITY_READ_ALL_FAIL)
//         });
//         return;
//     }
//     resolve({
//         json: utils.successTrue(sc.SUCCESS, rm.CITY_READ_ALL_SUCCESS, HotArtist)

//     });
// });

// module.exports = {

//     getHotArtist:function(req, res) {
//     var user={};
//         User.find()
//     .then((users2) => {
//         user=users2;
//     console.log("service "+user );
//     return users2;
//     })
//     .catch((err) => {
//     console.error(err);
//     next(err);
//     })
//     return user;
//     }

// }

// exports.getHotArtist = async()=>{

//     User.find()
//     .then((users) => {
//   //async  console.log("service "+users );
//     return users;
//     })
//     .catch((err) => {
//     console.error(err);
//     next(err);
//     })
// }
// exports.getHotArtist = function(){

//     User.find()
//     .then((users) => {
//     console.log("service "+users );
//     return users;
//     })
//     .catch((err) => {
//     console.error(err);
//     next(err);
//     })
//}

// exports.getHotArtis = async (boardId) => {
//     try {
//         User.find()
//         .then((users) => {
//         console.log("service "+users );
//         return users;})
//     } catch (err) {
//         console.error(err);
//     next(err);
//     }
// }
// exports.getHotArtist = async()=>{
//     User.find()
//     .then((users) => {
//     console.log("service "+users );
//     return users;
//     })
//     .catch((err) => {
//     console.error(err);
//     next(err);
//     })

// }
// exports.getHotArtist= function (err,결과) {
//     // var users2= {
//     //         "account": "07380sss9007dd3347",
//     //         "name" :"혜온",
//     //         "artist": 1,
//     //         "genre": ["이레즈미" , "블랙워크"]
//     //     };

//         User.find()
//         .then((users) => {
//        // console.log("service "+users );
//         //users2=users;
//         return users;
//         })
//         .catch((err) => {
//         console.error(err);
//         next(err);
//         })

//     }

//     isLogin:function(req, res) {
//         return req.session.is_logined;
//     },
//     loginStatusUI:function(req, res) {
//         let loginStatusUI = '<a href="/users">login</a>';
//         if (this.isLogin(req, res)) {
//             loginStatusUI = `<b>${req.session.ss_email}</b>님 안녕하세요. | <a href="/users/logout_process">logout</a>`;
//         }
//         return loginStatusUI;
//     }

// const pool = require('../database/pool')
// const BoardQuery = require('../queries/board-query')

// exports.getBoard = async (boardId) => {
//     try {
//         let data = await pool.query(BoardQuery.getBoard, [boardId])
//         return data[0]
//     } catch (err) {
//         console.log(err)
//         throw Error(err)
//     }
// }

// // 생략...

// exports.deleteComment = async (boardId, commentId) => {
//     let conn = await pool.getConnection()
//     try {
//         await conn.beginTransaction()

//         let del = await conn.query(BoardQuery.deleteComment, [commentId])
//         if (del[0].affectedRows == 1) {
//             let upd = await conn.query(BoardQuery.minusCommentCnt, [boardId])
//         }
//         await conn.commit()

//         return del[0]
//     } catch (err) {
//         conn.rollback()
//         console.log(err)
//         throw Error(err)
//     } finally {
//         conn.release()
//     }
// }

// exports.getUsers = async function (query, page, limit) {

//     try {
//         var users = await User.find(query)
//         return users;
//     } catch (e) {
//         // Log Errors
//         throw Error('Error while Paginating Users')
//     }
// }
