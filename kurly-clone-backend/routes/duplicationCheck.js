const express = require('express')
const router = express.Router()

const DuplicationCheckController = require('../controllers/DuplicationCheckController');



router.post('/duplicationcheckid', DuplicationCheckController.idDuplicationCheck);
router.post('/duplicationcheckemail', DuplicationCheckController.emailDuplicationCheck);

module.exports = router