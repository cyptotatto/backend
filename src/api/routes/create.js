import crypto from 'crypto'; //시스템 모듈이라 제일 위에 올림

import express from 'express';// 인스톨한거라 두번쨰
import AWS  from 'aws-sdk';
import multer  from 'multer';
import multerS3  from 'multer-S3';
import path  from 'path';
import dotenv from 'dotenv';
import crypto from 'crypto';

const createRouter= express.Router();

import * as createController from '../controllers/create.controller.js';

dotenv.config();

AWS.config.update({

region: process.env.REGION,
accessKeyId: process.env.S3_KEYID,
secretAccessKey: process.env.S3_PRIVATE_KEY,

 
});
//이부분은 따로 파일만들어서 export해서 multer기능 있는 파일에 s3를 import하는걸로 변경해야 함.

const s3 = new AWS.S3();

const allowedExtensions = ['.jpg','.png', '.GIF', '.WEBP', '.MP4', '.MP3'];

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'cryp-tattoo',
    limits: { fileSize: 100000, files: 1 },
    key: (req, file, callback) => {
     
    
      const extension = path.extname(file.originalname);
      if (!allowedExtensions.includes(extension)) {
        return callback(new Error('wrong extention'));
      }
      const dir = 'create'
      const name = `${crypto.randomUUID()}.${extension}`
       callback(null, `${dir}/${name}`) 
      
    },
    acl: 'public-read-write', //확인 요망
  }),
});

//, cb 함수의 두 번쨰 인자로 들어가는 것이 업로드 경로.  경로에 '/'를 포함하면 폴더도 자동으로 생성 
//위코드는 업로드 할 때 경로를 request에서 설정할 수 있게 req.query의 directory 값으로 받고, 없으면 디폴트 경로에 추가 


createRouter.post('/illustration', upload.single('file'), createController.createNFT1);

export default createRouter;
