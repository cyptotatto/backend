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
  bannerImgPath:{
    type: String
  },
  profileImgPath:{
    type: String
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    type: String,
    unique: true,
  },
  email: {
    type: String
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
  //굳이 배열로 해야할까? 만약 장르가 수정되지 않는다면 number로도 가능할듯(비트 마스킹) ex)  10110 ->(이레즈미,블랙워크,올드스쿨,뉴스쿨,일러스트) 중에서 이레즈미 블랙워크 올드스쿨 해당
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
 const User = mongoose.model("User", userSchema);
 export default User;
