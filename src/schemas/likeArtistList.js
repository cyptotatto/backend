const mongoose = require('mongoose');

const { Schema } = mongoose;

 const { Types: ObjectId } = Schema();
 /**
  * account 
  * artist
  * createdAt
  */
const likeArtistSchema = new Schema({
   account: {
    type: String,     // 자료형
    required: true,   // 필수 여부
    ref:'User'
  },
  
artist: [{
  
    artistId:{
    type:ObjectId,
    ref:'User',
    required:true
    }
}],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('likeArtist', likeArtistSchema);
//ㅇㅇ