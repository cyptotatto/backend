import * as nftService from '../../services/nft.service.js';
import * as userService from '../../services/user.service.js';
import * as transactionService from '../../services/transaction.service.js';
import * as likeItemService from '../../services/likeItem.service.js';
import User from '../../models/user.js';
import NFT from '../../models/nft.js' ;



export const createNft = async (req, res) => {
    try {
     
     //   console.log("???" + req.body.sale);
       // console.log(req.file.location);

      //  const awsUrl = req.file.location;
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
       (//awsUrl,
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
        //url: awsUrl,
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
  
  
  
    export async function getNftDetail(req, res)  {
      try {
        const nftId = req.params.id;
  
        const nft = await nftService.getNFT(nftId); //nft이름 변경?
  
        return res.status(200).json({
          status: 200,
          message: 'detail 가져오기 성공',
          // data: nftRanking
          nftId: nft,
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }

     
    