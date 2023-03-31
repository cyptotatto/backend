import mongoose from 'mongoose';

const { Schema } = mongoose;
/**
 * account
 * bannerImgPath
 * profileImgPath
 * name
 * profile
 * email
 * artist  아티스트인지 일반 사용자인지 여부
 * likeCount
 * genre
 * createdAt
 */
const userSchema = new Schema({
  account: {
    type: String, // 자료형
    required: true, // 필수 여부
    unique: true, // 고유 값
    //  default: true,
  },
  bannerImgPath: {
    type: String,
  },
  profileImgPath: {
    type: String,
  },
  name: {
    type: String,
    // default:null
  },
  profile: {
    type: String,
    default: null,
  },
  email: {
    type: String,
  },

  // artist: {
  //   //0은 일반 사용자 1은 아티스트
  //   type: Boolean,
  //   required: true, // 필수 여부
  //   default: 0,
  // },
  likeCount: {
    //만든 NFT 좋아요 총합
    type: Number,
    default: 0,
  },
  genre: [
    {
      type: String,
      default: null, //일반 사용자인 경우 디폴트값
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//module.exports = mongoose.model('User', userSchema);
const User = mongoose.model('User', userSchema);
export default User;
