/***const aws = require('aws-sdk');

const s3 = new aws.S3({
    accessKeyId: 'AKIAZLT53TGUU6TEL4NH',
    secretAccessKey: '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',
    region: 'ap-northeast-2'
});

const multer = require('multer');
const multer_s3 = require('multer-s3');

const storage = multer_s3({
    s3: s3,
    bucket: 'crytotattoo', // 자신의 s3 버킷 이름
    contentType: multer_s3.AUTO_CONTENT_TYPE,
    acl: 'public-read', // 버킷에서 acl 관련 설정을 풀어줘야 사용할 수 있다.
    metadata: function(req, file, cb) {
        cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
        cb(null, `contents/${Date.now()}_${file.originalname}`);
    }
})

exports.upload = multer({
    storage: storage // storage를 multer_s3 객체로 지정
})***/

// // import AWS from 'aws-sdk'
// // import multer from 'multer'
// // import multerS3 from 'multer-s3'
// // import path from 'path'
import AWS  from 'aws-sdk';
import multer  from 'multer';
import multerS3  from 'multer-S3';
import path  from 'path';
import dotenv from 'dotenv';
dotenv.config();

AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.S3_KEYID,
  secretAccessKey: process.env.S3_PRIVATE_KEY,
 
  // region: 'ap-northeast-2',
  // accessKeyId : 'AKIAZAOZ6H7DXNRF5MTW',
  // secretAccessKey : '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' ,

});

const s3 = new AWS.S3();

const allowedExtensions = ['.png', '.jpg', '.jpeg', '.bmp'];

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'cryp-tattoo',
    key: (req, file, callback) => {
     
      const uploadDirectory = req.body.directory ?? ''; //업로드할 디렉토리를 설정하기
    

      const extension = path.extname(file.originalname);
      if (!allowedExtensions.includes(extension)) {
        return callback(new Error('wrong extention'));
      }//{ fieldName: file.fieldname }  `${uploadDirectory}/${Date.now()}_${file.originalname}`
       callback(null, `${uploadDirectory}/${Date.now()}_${file.originalname}`)
      //callback(null, `contents/${Date.now()}_${file.originalname}`);
    },
    acl: 'public-read-write',
  }),
});

//  //export default imageUploader
// //  exports.upload = multer({
// //     imageUploader: imageUploader
// // })
// module.exports =  imageUploader;

//

// const multer = require('multer');
// const multerS3 = require('multer-s3');
// const aws = require('aws-sdk');
//aws.config.loadFromPath(__dirname + '/../config/s3.json');

// const s3 = new aws.S3();
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'cryp-tattoo',
//     acl: 'public-read',
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     key: function (req, file, cb) {
//       cb(null, `${Date.now()}_${file.originalname}`);
//     },
//   }),
// });

export default upload;
