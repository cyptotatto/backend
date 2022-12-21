import * as nftService from '../../services/nft.service.js';
import * as userService from '../../services/user.service.js';
import User from '../../models/user.js';
import NFT from '../../models/nft.js' ;



export const createNFT1 = async (req, res) => {
  try {
    const file = req.file.location; //s3에 저장된 file정보패스(경로)를 뽑아서 써야함
    const title = req.body.title;
    const link = null;
    const explanation =req.body.explanation;
    const sort =req.body.sort;
    const genre = req.body.genre;
    const theme = req.body.theme;
    const part = req.body.part;
    const sale = req.body.sale;
    const price = req.body.price;

    const nft = new NFT({
      awsUrl : req.file.location,
      title: req.body.title,
      link: req.body.link,
      explanation:req.body.explanation,
      tattooDesign:req.body.tattooDesign,
      holder: req.body.userAccount,       //처음 등록할 때는 holder와 artistAccount가 전부 userAccount. 거래시
      artistAccount: req.body.userAccount,
      artistId: req.body.artistID,
      price: req.body.price,
      genre: req.body.genre,
      theme: req.body.theme,
      part: req.body.part,
      sale: req.body.sale,
    });
  

    console.log(sort);

    
    //await nftService.mintNFT(file, title, link, explanation, sort, genre, theme, part, sale, price);

    return res.status(200).json({
      status: 200,
      message: 'create 성공',
    });
  } catch (err) {
      console.log(err);
      throw err;
  }};


export const createNft = async (req, res) => {
    try {
     
        console.log("???" + req.body.sale);
        //console.log(req.file.location);

         const awsUrl = req.file.location;
        const title = req.body.title;
        const link = req.body.link;
        const explanation =req.body.explanation;
        const tattooDesign= req.body.tattooDesign;
        const holder= req.body.userAccount; 
        const artistAccount= req.body.userAccount;
        const genre = req.body.genre;
        const theme = req.body.theme;
        const part = req.body.part;
        const sale = req.body.sale;
        const price = req.body.price;
   
       const createResult = await nftService.insertNft
       (awsUrl,
        title,
        link,
        explanation,
        tattooDesign,
        holder,
        artistAccount,
        genre,
        theme,
        part,
        sale,
        price);
  
      return res.status(200).json({
        status: 200,
        message: 'nft create',
        url: awsUrl,
        result :createResult
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
//nft 랭킹
  export async function getNftRanking  (req, res)  {
    try {
      
      const nftRanking = await nftService.getHotNFT(); //nft top100
    
      return res.status(200).json({
        status: 200,
        message: '랭킹 가져오기 성공',
        // data: nftRanking
        nftTop100: nftRanking,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
//user의  nft
  export async function getnft (req, res)  {
    try {
      const userAccount = req.params.account;
      const type = req.params.type; 
      console.log(userAccount+"  "+type);
      //user와 관련된 nft
      let mylist;
      if(type=='own')
        mylist = await nftService.getOwnNFT(userAccount); 
      else if(type=='made')
        mylist = await nftService.getMadeNFT(userAccount);
      else if(type=='sold')
        mylist = await transactionService.getSoldNFT(userAccount);
      else if(type=='likeNft')
        mylist = await likeItemService.getLikeNFT(userAccount);
      // else if(type=='likeArtist')
      //   mylist = await likeItemService.getLikeArtist(userAccount);

      return res.status(200).json({
        status: 200,
        message: 'nft 가져오기 성공',
        NFT: mylist,
      
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


  //nft 검색
  export const getNftKeywords = async (req, res) => {
    try {
      let searchQuery = {};
      let searchKeyWords=[];
      //true :도안,false:이미지
      //tattooDesign이 지금 없어서 잠시 주석 처리
      let tattooDesign=req.query.tattooDesign;
      console.log(tattooDesign);
      if(tattooDesign=="true")
        searchKeyWords.push({  tattooDesign: true});
      else
       searchKeyWords.push({  tattooDesign: false});
      if(req.query.genre)
        searchKeyWords.push({ genre: req.query.genre });
      if(req.query.theme)
        searchKeyWords.push({ theme: req.query.theme });
      if(req.query.part)
        searchKeyWords.push({ part: req.query.part });    
      searchQuery={searchKeyWords};
      const searchedNft = await nftService.searchNftByKeywords(searchQuery);
      
  
      return res.status(200).json({
        status: 200,
        message: '타투 도안 검색 성공',
        nft :searchedNft
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

