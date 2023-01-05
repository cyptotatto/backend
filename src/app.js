import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

import config from './config/index.js';
import { connectDB } from './loaders/mongoose.js';
import router from './api/routes/index.js';


const app = express();

const corsOptions = {
  origin: config.host.cors,// 접근 권한을 부여하는 도메인 
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
};

app.use(express.json(
  {limit : "50mb"}
)); // REST API, Body
app.use(express.urlencoded({ 
  limit:"50mb",
  extended: true})); // HTML Form => Body
app.use(cookieParser()); // cookie 사용시 설정
app.use(express.static('public')); // option도 가능
app.use(morgan('tiny')); // winston
app.use(helmet()); //보안 이슈
app.use(cors(corsOptions));


app.use('/', router);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: 'Something went wrong' });
});

connectDB().then(() => {
  console.log('DB Connection Success!');
  const server = app.listen(config.host.port);
});
