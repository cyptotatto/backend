import Transaction from '../models/transaction.js';
import User from'../models/user.js';




  export async function getSoldNFT (account)  {
    try {
      //const soldNft = await Transaction.find({ sellerAccount: account });
      let soldNft=new Object();;
      soldNft.latest = await Transaction.find({ sellerAccount: account   }).sort( { _id: -1 } ); //최신순
      soldNft.highPrice = await Transaction.find({sellerAccount: account }).sort({transactionPrice: -1} ); //가격 높은 순
      soldNft.lowPrice =soldNft.highPrice.reverce();

      return soldNft; 
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

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
