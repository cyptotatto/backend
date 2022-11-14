import express from 'express';
import AWS  from 'aws-sdk';
import multer  from 'multer';
import multerS3  from 'multer-S3';
import path  from 'path';
import dotenv from 'dotenv';

const createRouter= express.Router();

import * as createController from '../controllers/create.controller.js';

dotenv.config();

AWS.config.update({
  //region:
  //accessKeyId: 
  //secretAccessKey: 
 
});
//이부분은 따로 파일만들어서 export해서 multer기능 있는 파일에 s3를 import하는걸로 변경해야 함.

const s3 = new AWS.S3();

const allowedExtensions = ['.png', '.GIF', '.WEBP', '.MP4', '.MP3'];

/**const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'cryp-tattoo',
    limits: { fileSize: 100000, files: 1 },
    key: (req, file, callback) => {
     
    
      const extension = path.extname(file.originalname);
      if (!allowedExtensions.includes(extension)) {
        return callback(new Error('wrong extention'));
      }
       callback(null, `${Date.now()}_${file.originalname}`)
      
    },
    acl: 'public-read-write',
  }),
});**/


createRouter.post('/illustration', //upload, 
createController.createNFT1);

export default createRouter;
