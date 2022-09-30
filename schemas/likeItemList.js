const mongoose = require('mongoose');

const { Schema } = mongoose;

 const { Types: ObjectId } = Schema();
const likeItemSchema = new Schema({
  account: {
    type: String,     // 자료형
    required: true,   // 필수 여부
  },
  nftId: { 
    type: ObjectId,
    type:String,
    required: true,
    ref: 'NFT'    
    
},
  createdAt: {//도안 top 100을 위해 임의로
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('likeItem', likeItemSchema);
