const axios = require('axios');
const Cache = require('memory-cache');
const { createRandomNumber } = require('../../functions/createRandomNumber');
const CryptoJS = require('crypto-js')

const postVerifyCode = async (req, res) => {
  const { tel } = req.body;
  console.log(tel);
  Cache.del(tel);

  const user_phone_number = tel; // SMS를 수신할 전화번호
  const code = createRandomNumber(); // 인증 코드 (6자리 숫자)
  const date = Date.now().toString(); // 날짜 string
  Cache.put(tel, code, 180000);
    // 환경 변수
  const sens_service_id = 'ncp:sms:kr:292823530206:auth'
  const sens_access_key = 'tF35UbjXPhm4YzI0hHfI';
  const sens_secret_key = '07S7GNKdlg643xb8p14q69Tq2KmjkqNWMH9i2ZWm'
  const sens_call_number = '01030695871';

    // url 관련 변수 선언
  const method = "POST";
  const space = " ";
  const newLine = "\n";
  const url = `https://sens.apigw.ntruss.com/sms/v2/services/${sens_service_id}/messages`;
  const url2 = `/sms/v2/services/${sens_service_id}/messages`;

    // signature 작성 : crypto-js 모듈을 이용하여 암호화
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, sens_secret_key);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url2);
  hmac.update(newLine);
  hmac.update(date);
  hmac.update(newLine);
  hmac.update(sens_access_key);
  const hash = hmac.finalize();
  const signature = hash.toString(CryptoJS.enc.Base64);
  
  try {
    // sens 서버로 요청 전송
    const smsRes = await axios({
      method: method,
      url: url,
      headers: {
        "Contenc-type": "application/json; charset=utf-8",
        "x-ncp-iam-access-key": sens_access_key,
        "x-ncp-apigw-timestamp": date
        ,
        "x-ncp-apigw-signature-v2": signature,
      },
      data: {
        type: "SMS",
        countryCode: "82",
        from: sens_call_number,
        content: `[${code}] 컬리클론 인증번호를 입력해주세요.`,
        messages: [{ to: `${user_phone_number}` }],
      },
    });
    console.log("response", smsRes.data);
    return res.json({ message: "SMS sent" });
  } catch (err) {
    console.log(err);
    Cache.del(tel);
    return res.json({ message: "SMS not sent" });
  };
};

const confirmVerifyCode = async (req, res) => {
  const { tel, code } = req.body;

  const CacheData = Cache.get(tel);
  if (!CacheData) {
    return (res.json({errorCode: 0, message: '인증번호를 다시 요청해주세요'}))

  }

  if (CacheData !== code) {
    return (res.json({errorCode: 2, message: '인증번호가 틀립니다.'}))

  }

  Cache.del(tel);
  return res.json({errorCode: 1, message: '인증에 성공하였습니다.'})
};

module.exports = { postVerifyCode, confirmVerifyCode }