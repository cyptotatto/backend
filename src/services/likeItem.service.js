import likeItemList from '../models/likeItemList.js';
import NFT from '../models/nft.js';
import User from'../models/user.js';


// var whereClause = { name:/Chaman Gautam/}; //Lucky Gautam
// var newvalues = { $set: { name:'Lucky Gautam'}}; //Chaman Gautam
// nodtst.collection('pract').updateOne(whereClause,newvalues,function(err,res){ 
//     if(error){ throw error; } 
//     console.log("1 document 수정 완료.");
//     console.log(res.result   + 'document updated'); }); });

export async function setLike(account,mode,objectId)  {//user or nft :likeCount 증가,likeItemList: nftId추가
  try {
    if(mode=="nft")
    {
      console.log("account "+account);
         NFT.updateOne({_id:objectId},{$inc:{ likeCount:1}},function(err,res){ 
              if(err){ throw err; } 
              console.log( 'NFT document updated'); }); 
        
        likeItemList.updateOne({userAccount:account},{$push:{nfts:objectId}},function(err,res){ 
          if(err){ throw err; } 
          console.log(res);
          

          console.log( 'likeItemList document updated'); });
       
    }
    else//artist(user)좋아요
    {
        User.updateOne({account:objectId},{$inc:{ likeCount:1}},function(err,res){ 
          if(err){ throw err; } 
          console.log( 'User document updated'); }); 

        likeItemList.updateOne({userAccount:account},{$push:{ artists:objectId}},function(err,res){ 
          if(err){ throw err; } 
    
          console.log( 'likeItemList document updated'); }); 

          
    }
    
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function getLikeNftList (account)  {
    try {
      const likeItem = await likeItemList.findOne({ userAccount: account }); //최신순,인기순 해야함 populate
      return likeItem.nfts;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
//좋아하는 아티스트
  export async function getLikeArtist (account)  {
    try {
      const likeItem = await likeItemList.findOne({ userAccount: account });
      console.log(likeItem.artists);
      return likeItem.artists;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }



