// const mongoose = require('mongoose');

// const { Schema } = mongoose;
// /**
//  * 작성자, 댓글내용, 생성일
//  */
// const { Types: ObjectId } = Schema();
// //const { Types: ObjectId } = Schema;
// const commentSchema = new Schema({
//    commenter: {
//      type: ObjectId,
//     type:String,
//      required: true,
//      ref: 'User'      // User Schema의 아이디
//    },
//   comment: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   }
// })

// module.exports = mongoose.model('Comment', commentSchema);
