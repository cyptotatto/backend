//var createError = require('http-express');
//const User = require('./schemas/users');
const port = 5000;

var express =require('express');
var path = require('path');
var bodyParser = require('body-parser')


var logger =require('morgan');

//var userRouter = require('./routes/users');
//var indexRouter =require('./routes/index');
var connect =require('./schemas');

var app =express();
app.use(bodyParser.json());
//app.use('/users', require('./routes/users'));
app.use('/', require('./routes'));


connect();
app.get('/', function (req, res) {
    res.send('hello world!!2');

    // const user = new User({
    //     // name: req.body.name,
    //     // age: req.body.age,
    //     // married: req.body.married
    //     name: "hye-on2",
    //     age: 22,
    //     married: false
    //   })
    //   user.save()
    //     .then((result) => {
    //     console.log("22");
    
    //       res.json(result);
    //     })
    //     .catch((err) => {
    //     console.log("33");
    
    //       console.error(err);
    //       next(err);
    //     })

        res.send('hello world!!2');


  });

  
  
  app.listen(port, () => console.log(`${port}포트입니다.`));
  
  // 몽구스 연결
 
    

//var indexRouter =require('./routes/index');
//var userRouter = require('./routes/users');
