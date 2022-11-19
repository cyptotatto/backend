import multer  from 'multer';
import multerS3  from 'multer-S3';
import path  from 'path';
import s3 from '../../common/s3.js';
 
 

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
