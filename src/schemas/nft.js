const mongoose = require('mongoose');

const { Schema } = mongoose;
/**
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

title: {
    type: String,
    required: true,
    
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
// ownerId: { 
//   type: ObjectId,
//   type:String,
//   ref: 'User'    
    
// },
price: {
  type: Number,     // 자료형
  required: true   // 필수 여부
  
  },
likeCount: {
  type: Number,     
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