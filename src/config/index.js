import dotenv from 'dotenv';
dotenv.config();

export default {
  host: {
    cors: process.env.CORS_ORIGIN,
    port: Number(process.env.PORT),
  },
  db: {
    url: process.env.DB_URL,
  },
  s3: {
    region: process.env.REGION,
    keyId: process.env.S3_KEYID,
    privateKey: process.env.S3_PRIVATE_KEY,
    bucket: process.env.S3_BUCKET,
  },
};
