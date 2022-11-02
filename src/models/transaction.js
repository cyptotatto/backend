const mongoose = require('mongoose');
const BigNumberSchema = require('mongoose-bignumber');
const { BigNumber } = require('ethers');
const { Schema } = mongoose;

const { Types: ObjectId } = Schema();
const transactionSchema = new Schema({
  /**
   * buyerAccount
   * sellerAccount
   * nftId
   * transactionPrice
   */

  buyerAccount: {
    type: ObjectId,
    type: String,
    required: true,
    ref: 'User',
  },
  sellerAccount: {
    type: ObjectId,
    type: String,
    required: true,
    ref: 'User',
  },
  nftId: {
    type: ObjectId,
    type: String,
    required: true,
    ref: 'NFT',
  },
  transactionPrice: {
    type: BigNumber,
    required: true,
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);
