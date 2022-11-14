import * as userService from '../../services/user.service.js';
import * as nftService from '../../services/nft.service.js';
import * as transactionService from '../../services/transaction.service.js';
import * as likeItemService from '../../services/likeItem.service.js';




  //소유 ->nft(ownerId), 만든->nft(artistId), 판매한->transaction(sellerAccount) , 좋아요->likeItemSchema(userAccount)
  export async function getMyInformation (req, res)  {
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
  }
  export async function editMyInformation(req, res)  {
    try {
      const userAccount = req.body.account;
      // 닉네임
      // 프로필소개
      // 이메일
      // 대표 장르 선택
     // console.log("req.files" + req.files);
      //저장된 이미지 경로
      //let imgFile = req.files;
      console.log(req.files['bannerImg'][0].location);
     // res.json(imgFile);
     // const path= req.files.map(file => file.path);
     // console.log("여기==========================="+  path);
      const bannerImagePath=req.files['bannerImg'][0].location;
      const profileImagePath=req.files['profileImg'][0].location;
      const nickname = req.body.nickname;
      const profileIntro = req.body.profile;
      const emailAddress = req.body.emailAddress;
      const genre1=req.body.genre1;
      const genre2=req.body.genre2;
      const genre3=req.body.genre3;

    let  tattooGenre = [];
    
    if(genre1!="")
      tattooGenre.push(genre1);
    if(genre2!="")
      tattooGenre.push(genre2);
    if(genre3!="")
      tattooGenre.push(genre3);



     console.log("req.name : "+ tattooGenre );
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

