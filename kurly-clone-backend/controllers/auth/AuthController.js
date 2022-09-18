const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
    if (err) {
      res.json({
        error: err
      })
    }
    let user = new User ({
      memberId: req.body.memberId,
      password: hashedPass,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      extraAddress: req.body.extraAddress,
      gender: req.body.gender,
      birth: req.body.birth,
    })
    user.save()
    .then(user => {
      res.json({
        status: 1,
        message: '회원가입이 성공적으로 이루어졌습니다.'
      })
    })
    .catch(error => {
      res.json({
        status: 0,
        message: '입력한 내용을 다시 한 번 확인해주세요'
      })
    })
  })
}

const login = (req, res, next) => {
  const memberId = req.body.memberId;
  const password = req.body.password;

  User.findOne({ memberId: memberId })
  .then(user => {
    if (user) {
      bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
          res.json({
            error: err
          })
        }
        if (result) {
          let token = jwt.sign({memberId: user.memberId}, 'verySecretValue', {expiresIn: '1h'})
          res.json({
            token,
            name: user.name,
            status: 1,
          })
        } else {
          res.json({
            message: '비밀번호를 다시 확인해주세요.',
            status: 2,
          })
        }
        })
    } else {
      res.json({
        message: '존재하지 않는 아이디입니다.',
        status: 3,
      })
    }
  })
}


module.exports = { signup, login }