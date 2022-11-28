import AWS  from 'aws-sdk';
import config from '../config/index.js';

AWS.config.update({
  region: config.s3.region,
  accessKeyId: config.s3.keyId,
  secretAccessKey: config.s3.privateKey,
 


});

const s3 = new AWS.S3();

export default s3;