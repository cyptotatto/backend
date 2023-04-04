import crypto from 'crypto';
import express from 'express';

import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import { s3, bucket } from '../../common/s3.js';

//const allowedExtensions = ['.png', '.jpg', '.jpeg', '.bmp','.GIF', '.WEBP', '.MP4', '.MP3'];
const allowedExtensions = ['.png', '.jpg', '.jpeg'];

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucket,
    limits: { fileSize: 100000 },
    key: (req, file, callback) => {
      console.log('이미지');
      const extension = path.extname(file.originalname);

      const uploadDirectory = req.body.directory ?? ''; //업로드할 디렉토리를 설정하기

      const name = 'create';
      `${crypto.randomUUID()}.${extension}`;

      if (!allowedExtensions.includes(extension)) {
        return callback(new Error('wrong extention'));
      } //{ fieldName: file.fieldname }  `${uploadDirectory}/${Date.now()}_${file.originalname}`
      callback(null, `${uploadDirectory}/${name}`);
      //callback(null, `contents/${Date.now()}_${file.originalname}`);
    },
    acl: 'public-read-write',
  }),
});

const allowedExtensions2 = [
  '.png',
  '.jpg',
  '.jpeg',
  '.bmp',
  '.GIF',
  '.WEBP',
  '.MP4',
  '.MP3',
];

export const upload2 = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucket,
    limits: { fileSize: 100000 },
    key: (req, file, callback) => {
      const extension = path.extname(file.originalname);

      // const uploadDirectory = req.body.directory ?? ''; //업로드할 디렉토리를 설정하기
      const dir = 'create';
      const name = `${crypto.randomUUID()}.${extension}`;

      if (!allowedExtensions2.includes(extension)) {
        return callback(new Error('wrong extention'));
      } //{ fieldName: file.fieldname }  `${uploadDirectory}/${Date.now()}_${file.originalname}`

      callback(null, `${dir}/${name}`);

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

//export default upload;
