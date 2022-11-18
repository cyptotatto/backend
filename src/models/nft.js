
import BigNumberSchema from 'mongoose-bignumber';
import mongoose from 'mongoose';

//import { BigNumber } from "ethers";
const { Schema } = mongoose;
/**mintHash
 * mintSignature
 * tokenID(big number)
 * holder
 * isMint 민팅여부
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
  holder: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
  isMint: {
    type: Boolean,
    required: true,
    default: false,
  },
  link: {
    type: String,
    required: false,

   },
  explanation: {
    type: String,
  },
  tattooDesign: {
    type: Boolean, //true ->타투도안 , false-> 타투이미지
    required: true,
    default: true,
  },
  artistAccount: {
    //type: ObjectId,
    type: String, //:id, :account 이런식의 스트링 형식. params요고
    required: true,
    //ref: 'User',
  },
  ownerAccount: {
    //type: ObjectId,
    type: String, //:id, :account 이런식의 스트링 형식. params요고
    //ref: 'User',
  },
  price: {
    type: Number, // 자료형
  },
  likeCount: {
    //증가하면 user의 likeCount증가하게 해주어야한다.
    type: Number,
    index: true,
    default: 0,
  },
  sort: {
    type: String,
    required: true,
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