const express = require('express');
const router = express.Router();
const User = require('../schemas/users');

// 유저 생성 http://localhost:5000/users/add
router.post('/add', function(req,res){
  const user = new User({
    account: req.body.account
  })

  console.log("요청" + req.body);
  console.log(user);
  user.save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
})

// 사용자 전체 조회  http://localhost:5000/users/list

router.get('/list',function(req,res){
  
    User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })

});


//계정을 수정하는 (update) 기능도 필요할까? 메타마스크 계좌를 가져오는 것 뿐인데

//user 삭제 http://localhost:5000/users/delete     
router.delete('/delete',function(req, res){
    
 
  User.deleteOne({"account" : req.body.account})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
  
});

module.exports = router;