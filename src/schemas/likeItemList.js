const mongoose = require('mongoose');

const { Schema } = mongoose;

 const { Types: ObjectId } = Schema();

 /**
  * account
  * nfts
  * createAt
  */
const likeItemSchema = new Schema({
  userAccount: {
    type: String,     // 자료형
    required: true,   // 필수 여부
    ref:'User'
  },
  
nfts: [{ 
          nftId:{
           type:ObjectId,
           ref:'NFT',
           type:String,
           required:true
          }    
}],
  createdAt: {//도안 top 100을 위해 임의로
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('likeItem', likeItemSchema);
//ㅇㅇ