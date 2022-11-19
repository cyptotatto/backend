import express from 'express';
import config from './config/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
//import fileUpload from 'express-fileupload'; //파일업로드
//import bodyParser from 'body-parser'; //파일업로드

import { connectDB } from './loaders/mongoose.js';
import  router from "./api/routes/index.js";

const app = express();

const corsOptions = {
  origin: config.host.cors,
};

app.use(express.json()); // REST API, Body
app.use(express.urlencoded({ extended: true })); // HTML Form => Body
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser()); // cookie 사용시 설정
app.use(express.static('public')); // option도 가능
app.use(morgan('tiny')); // winston
app.use(helmet()); //보안 이슈
app.use(cors(corsOptions));

//app.use(fileUpload({createParentPath: true})); //파일 업로드 

app.use("/", router);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: 'Something went wrong' });
});


connectDB().then(() => {
  
  console.log('DB Connection Success!');
  const server = app.listen(config.host.port);
});
