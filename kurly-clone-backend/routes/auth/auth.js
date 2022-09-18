const express = require('express')
const router = express.Router()

const AuthController = require('../../controllers/auth/AuthController');
const DuplicationCheckController = require('../../controllers/auth/DuplicationCheckController');
const SMSCheckController = require('../../controllers/auth/SMSCheckController');

router.post('/auth/signup', AuthController.signup);
router.post('/auth/login', AuthController.login)
router.post('/auth/duplicationcheckid', DuplicationCheckController.idDuplicationCheck);
router.post('/auth/duplicationcheckemail', DuplicationCheckController.emailDuplicationCheck);
router.post('/auth/smscheck', SMSCheckController.postVerifyCode);
router.post('/auth/smscheck/isvalidate', SMSCheckController.confirmVerifyCode); 


module.exports = router