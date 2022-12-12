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
    unique: true, // 고유 값
    ref: 'User',
  },

  nfts: [
    // {
    //   nftId: {
    //    type: ObjectId,
    //     ref: 'NFT',
    //     type: String
       
    //   },
    // },
    {type: String,
    unique: true, // 고유 값
    }
  ],
  artists:[
    {
      // artistAccount: {
      //   type: ObjectId,
      //   ref: 'User',
        type: String,
        unique: true, // 고유 값

        
    //  },
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
