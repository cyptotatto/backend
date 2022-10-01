const mongoose = require('mongoose');

const { Schema } = mongoose;
/**
 * account
 */
const userSchema = new Schema({

  account: {
    type: String,     // 자료형
    required: true,   // 필수 여부
    unique: true,     // 고유 값
  //  default: true,
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema);
// const User = mongoose.model('User', userSchema);
// export default User;