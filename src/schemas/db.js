const mongoose = require('mongoose');
var url = //'mongodb+srv://cryptotattoo:tattoocrypto@cluster0.x3sq521.mongodb.net/?retryWrites=true&w=majority'
'mongodb+srv://ain0103:HGu5b3r1aIz0hQqs@cluster0.8s3c6l1.mongodb.net/?retryWrites=true&w=majority'; 
//하영님 url로 테스트 할때는  제 url 주석처리 부탁드려요!(지우지 말아주세요)
const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }

  mongoose.connect(url, {
    dbName: 'chichi',
   //dbName: 'mongo',
   // useNewUrlParser: true,
    //userCreateIndex: true,
  }, (error) => {
    if (error) {
    

      console.log('몽고디비 연결 에러', error);
    } else {

      console.log('몽고디비 연결 성공');
   
    }
  });
}






mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});

mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다');
  connect();
});

module.exports = connect;