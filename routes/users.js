const express = require('express');
const router = express.Router();
const User = require('../schemas/users');

// 사용자 전체 조회
router.get('/', (req, res, next) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
});

// 유저 생성
router.post('/', (req, res, next) => {
//res.send('안녕');
    console.log("11");
  const user = new User({
    // name: req.body.name,
    // age: req.body.age,
    // married: req.body.married
    name: "hye-on9999",
    age: 22,
    married: false
  })
  user.save()
    .then((result) => {
    console.log("22");

      res.json(result);
    })
    .catch((err) => {
    console.log("33");

      console.error(err);
      next(err);
    })
})

module.exports = router;