const mongoose = require('mongoose');

const { Schema } = mongoose;
/**title
 * artist_id
 * ownerId
 * price
 * like_count
 * created_at
 * genre
 * theme
 * part
 */
 const { Types: ObjectId } = Schema();
const nftSchema = new Schema({

title: {
      type: String,
      required: true,
    
    },
  artistId: { 
        type: ObjectId,
        type:String,
        required: true,
        ref: 'Artist'      
        
  },
  ownerId: { 
    type: ObjectId,
    type:String,
    ref: 'User'     //소유자가 Artist일 수도..
    
},
  price: {
    type: Number,     // 자료형
    required: true   // 필수 여부
  
  },
  likeCount: {
    type: Number,     
    default: 0
  
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  
  genre : [{//수정
    type: String
}],
theme: [{
    type: String
}],
part: {//부위는 하나만 가능 , 도안NFT에서는 사용 x ,사진 NFT에서만 사용
    type: String,
    default : null //null이 가능한가
  }

})
//테스트코드

module.exports = mongoose.model('NFT', nftSchema);
