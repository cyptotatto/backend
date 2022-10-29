const mongoose = require('mongoose');
const BigNumberSchema = require('mongoose-bignumber')
const { Schema } = mongoose;
/**mintHash 
 * mintSignature
 * tokenID(big number)
 * holder
 * isMint 민팅여부 
 * title
 * link
 * artistId
 * ownerId
 * price
 * likeCount
 * genre
 * theme
 * part
 * createdAt
 * 
 */
 const { Types: ObjectId } = Schema();
const nftSchema = new Schema({
mintHash : {//lazy minting 의 경우 create할때는 없는 값이므로  default null, required true 안했음
  type: String,
  default:null
  },
  mintSignature: {
    type: String,
    default:null
    },
  tokenID:{
    type: BigNumberSchema,
    default:0
  },
 holder : {
  type: String,
  default:null
  },
  title: {
      type: String,
      required: true,
      
  },
  isMint: {
    type: Boolean,
    required: true,
    default:false
    
},
// link: {//추가됨
//   type: URL,
//   required: true,

// },
explanation:{
type: String

},
artistId: { 
      type: ObjectId,
      type:String,
      required: true,
      ref: 'User'      
        
  },
ownerId: { 
  type: ObjectId,
  type:String,
  ref: 'User'    
    
},
price: {
  type: Number,     // 자료형
 
  
  },
likeCount: {//증가하면 user의 likeCount증가하게 해주어야한다.
  type: Number,
  index: true,     
  default: 0
 
  
},

genre : {
  type: String,
  required: true
},
theme: {
    type: String,
    required: true,
},
part: {// 도안NFT에서는 사용 x ,사진 NFT에서만 사용
    type: String,
    default : null //null이 가능한가
},
createdAt: {
  type: Date,
  default: Date.now
},
sale:{//true->판매등록, false -> 판매안함
  type:Boolean,
  require:true
}

  
})


//module.exports = mongoose.model('NFT', nftSchema);
module.exports = mongoose.models['NFT'] || mongoose.model('NFT', nftSchema);