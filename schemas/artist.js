const mongoose = require('mongoose');

const { Schema } = mongoose;
/**
 * account
 * 장르 : 여러개 가능-> 배열
 * 생성
 */
const artistSchema = new Schema({
  account: {
    type: String,     // 자료형
    required: true,   // 필수 여부
  
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  genre : [{
    type: String
}]
})
//ㅇ
module.exports = mongoose.model('Artist', artistSchema);
