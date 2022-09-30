const mongoose = require('mongoose');

const { Schema } = mongoose;

 const { Types: ObjectId } = Schema();
const transactionSchema = new Schema({


buyerId: { 
    type: ObjectId,
    type:String,
    required: true,
    ref: 'User'    
    
},
sellerId: { 
    type: ObjectId,
    type:String,
    required: true,
    ref: 'User'    
    
},
nftId: { 
    type: ObjectId,
    type:String,
    required: true,
    ref: 'NFT'    
    
},
transactionPrice: {
    type: Number,     
    required: true   
 
  }
  

})

module.exports = mongoose.model('Transaction', transactionSchema);
