const { sens } = require('../../config/config')
const { createRandomNumber } = require('../../functions/createRandomNumber')
const { saveAuthCode } = require('../../functions/auth/saveAuthCode')
const { sendVerificationSMS } = require('../../functions/auth/sendSMS')
const { compareAuthCode } = require('../../functions/auth/compareAuthCode')

module.exports = {
  sendSMS: async (req, res) => {
    try {
      const key = req.body.phone;
      const code = createRandomNumber();

      await saveAuthCode(key, code);
      await (key, code);
      return res.status(200).send({ message: '문자 발송 완료' });
    } catch (e) {
      console.log(e);
      return res.status(500).send({ message: "문자 발송 실패 :(" });
    }
  },
  confirmVerificationCode: async (req, h) => {
    const { phone, code } = req.body;
    const result = await compareAuthCode(phone, code);
    return res.status(200).send(result);
  }
}