import * as userService from '../../services/user.service.js';
import * as nftService from '../../services/nft.service.js';
import * as transactionService from '../../services/transaction.service.js';
import * as likeItemService from '../../services/likeItem.service.js';

//소유 ->nft(ownerId), 만든->nft(artistId), 판매한->transaction(sellerAccount) , 좋아요->likeItemSchema(userAccount)
export async function getMyInformation(req, res) {
  try {
    const userAccount = req.params.account;
    //user 정보
    const userInformation = await userService.getUser(userAccount);
    //소유, 만든, 판매,좋아요한 NFT, 좋아요한 아티스트
    const type = req.params.type;
    console.log(userAccount + '  ' + type);
    //user와 관련된 nft
    let mylist;
    if (type == 'own') mylist = await nftService.getOwnNFT(userAccount);
    else if (type == 'made') mylist = await nftService.getMadeNFT(userAccount);
    else if (typee == 'sold')
      mylist = await transactionService.getSoldNFT(userAccount);
    else if (type == 'likeNft')
      mylist = await likeItemService.getLikeNFT(userAccount);
    else if (type == 'likeArtist')
      mylist = await likeItemService.getLikeArtist(userAccount);

    return res.status(200).json({
      status: 200,
      message: 'myPage 가져오기 성공',

      user: userInformation,
      NFT: mylist,
      // madeNFT: madeNft,
      // soldNft: soldNft,
      // likeNTF: likeNft,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function editMyInformation(req, res) {
  try {
    // 닉네임
    // 프로필소개
    // 이메일
    // 대표 장르 선택 1,2,3

    const userAccount = req.body.account;
    const bannerImagePath =
      'https://cryp-tattoo.s3.ap-northeast-2.amazonaws.com/test/1669630822073_5.png'; //req.files['bannerImg'][0].location;
    const profileImagePath =
      'https://cryp-tattoo.s3.ap-northeast-2.amazonaws.com/test/1669630822074_test3.jpg'; //req.files['profileImg'][0].location;
    const nickname = req.body.nickname;
    const profileIntro = req.body.profile;
    const emailAddress = req.body.emailAddress;
    const genre1 = req.body.genre1;
    const genre2 = req.body.genre2;
    const genre3 = req.body.genre3;

    let tattooGenre = [];

    if (genre1 != '') tattooGenre.push(genre1);
    if (genre2 != '') tattooGenre.push(genre2);
    if (genre3 != '') tattooGenre.push(genre3);

    console.log('req.name : ' + tattooGenre);
    // //user 정보
    await userService.setUser(
      userAccount,
      bannerImagePath,
      profileImagePath,
      nickname,
      profileIntro,
      emailAddress,
      tattooGenre,
    );

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
