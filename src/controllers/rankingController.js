var userService = require('../services/userService');  
var nftService = require('../services/nftService');
const User = require('../schemas/user');
const Nft = require('../schemas/nft');


//블로그 변경
// exports.getHotItem = async (req, res, next) => {
//      let ranking = {};
//     try {
//        //  ranking = await userService.getHotArtist()
//          console.log("테스트 "+  userService.getHotArtist())
//         return res.json(ranking)
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// }

// exports.getHotItem = function(req, res, next) {
   
//     try {
     

//         return res.json(ranking)
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// };

exports.getHotItem = async (req, res, next) => {
    
    //let { boardId } = req.params
    var ranking={};

    //

    //user가져오기
    User.find()
    .then((ranking) => {
    //ranking=users;
    res.json(ranking);
    })
    .catch((err) => {
    console.error(err);
    next(err);
    })

    //nft 가져오기
    // Nft.find()
    // .then((nfts) => {
    // ranking.nft=nfts;
    // //res.json(ranking.user);
    // })
    // .catch((err) => {
    // console.error(err);
    // next(err);
    // })

    //
    // try {
    //      ranking.user =userService.getHotArtist();
    //      ranking.nft =nftService.getHotNFT();

    //     return res.json(ranking)
    // } catch (err) {
    //     return res.status(500).json(err)
    // }
}

// // 생략...

// exports.deleteComment = async (req, res, next) => {
//     let { boardId, commentId } = req.params
//     try {
//         let del = await BoardService.deleteComment(boardId, commentId)
//         return res.json(del)
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// }

// module.exports = {


// }