const mongoose = require('mongoose');
var url = 'mongodb+srv://ain0103:HGu5b3r1aIz0hQqs@cluster0.8s3c6l1.mongodb.net/?retryWrites=true&w=majority'; 
const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }

  mongoose.connect(url, {
    dbName: 'mongo',
    //useNewUrlParser: true,
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