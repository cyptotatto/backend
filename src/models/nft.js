
import BigNumberSchema from 'mongoose-bignumber';
import mongoose from 'mongoose';

//import { BigNumber } from "ethers";
const { Schema } = mongoose;
/**mintHash
 * mintSignature
 * tokenID(big number)
 * holder
 * title
 * link
 * explanation
 * tattooDesign  타투도안인지 타투사진인지
 * artistAccount
 * ownerAccount
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
  // awsUrl:{
  //   type: String,
  //   default: null,
  // },
  mintHash: {
    //lazy minting 의 경우 create할때는 없는 값이므로  default null, required true 안했음
    type: String,
    default: null,
  },
  mintSignature: {
    type: String,
    default: null,
  },
  tokenID: {
    type: BigNumberSchema,
    default: 0,
  },
  file: {
  type: String,
  default: null,
  required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isMint: {
    type: Boolean,
    //required: true, 임의로 주석했습니다
    default: false,
  },
  link: {
    type: String,
  
   },
  explanation: {
    type: String,
  },
  tattooDesign: {
    type: Boolean, //true ->타투도안 , false-> 타투이미지
    //required: true,임의로 주석했습니다.
    default: true,
  },
  artistAccount: {
    //type: ObjectId,
    type: String, //:id, :account 이런식의 스트링 형식. params요고
   // required: true, 임의로 주석했습니다.
    //ref: 'User',
  },
  holder: {//ownerAccount하고 중복되어서 ownerAccount 삭제
    type: String,
    default: null,
  },
  price: {
    type: Number, // 자료형
  },
  likeCount: {
   
    type: Number,
    index: true,
    default: 0,
  },
  genre: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  part: {
    // 도안NFT에서는 사용 x ,사진 NFT에서만 사용
    type: String,
    default: null, //null이 가능한가
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  sale: {
    //true->판매등록, false -> 판매안함
    type: Boolean,
    require: true,
  },
});

//module.exports = mongoose.model('NFT', nftSchema);
//module.exports = mongoose.models['NFT'] || mongoose.model('NFT', nftSchema);


const Nft  = mongoose.model('Nft', nftSchema);
export default Nft;