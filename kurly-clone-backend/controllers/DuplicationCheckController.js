const User = require('../models/User');

const idDuplicationCheck = (req, res, next) => {
  const memberId = req.body.memberId;
  User.findOne({ memberId })
  .then(user => {
    if (user) {
      res.json({
        status: 0,
        message: '사용 불가능한 아이디입니다.'
      })
    } else {
      res.json({
        status: 1,
        message: '사용할 수 있는 아이디입니다.'
      })
    }
  })
}

const emailDuplicationCheck = (req, res, next) => {
  const email = req.body.email;
  User.findOne({ email })
  .then(user => {
    if (user) {
      res.json({
        status: 0,
        message: '사용 불가능한 이메일입니다.'
      })
    } else {
      res.json({
        status: 1,
        message: '사용할 수 있는 이메일입니다.'
      })
    }
  })
}

module.exports = {
  idDuplicationCheck, emailDuplicationCheck
}