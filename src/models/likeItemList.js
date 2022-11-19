import mongoose from 'mongoose';
const { Schema } = mongoose;

const { Types: ObjectId } = Schema();

/**
 * account
 * nfts
 * createAt
 */
const likeItemSchema = new Schema({
  userAccount: {
    type: String, // 자료형
    required: true, // 필수 여부
    ref: 'User',
  },

  nfts: [
    {
      nftId: {
        type: ObjectId,
        ref: 'NFT',
        type: String
       
      },
    },
  ],
  artists:[
    {
      artistAccount: {
        type: ObjectId,
        ref: 'User',
        type: String
      
      },
    },
  ],
  createdAt: {
    
    type: Date,
    default: Date.now,
  },
});

//module.exports = mongoose.model('likeItem', likeItemSchema);

const likeItem  =  mongoose.model('likeItem', likeItemSchema);
export default likeItem;
