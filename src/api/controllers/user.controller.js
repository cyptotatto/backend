import * as userService from '../../services/user.service.js';




export const registerUser = async (req, res) => {
  try {
    const account = req.params.account;
    console.log("dddd "+req.body.a);
     await userService.insertUser(account);
     
    return res.status(200).json({
      status: 200,
      message: '회원가입성공'
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export async function getUserRanking  (req, res)  {
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
