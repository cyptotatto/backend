import AWS from 'aws-sdk';
import config from '../config/index.js';

AWS.config.update({
  region: config.s3.region,
  accessKeyId: config.s3.keyId,
  secretAccessKey: config.s3.privateKey,

  // region: 'ap-northeast-2',
  // accessKeyId : 'AKIAZAOZ6H7DXNRF5MTW',e
  // secretAccessKey : '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' ,
});

export const s3 = new AWS.S3();
export const bucket = config.s3.bucket;
