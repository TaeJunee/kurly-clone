import { useState } from 'react'
import axios from 'axios'
import ValidationCheck from '../../pages/signUp/ValidationCheck';

export const DuplicationCheck = () => {
  const [idIsOk, setIdIsOk] = useState<boolean>(false);
  const [emailIsOk, setEmailIsOk] = useState<boolean>(false);

  const { memberId, memberIdErr } = ValidationCheck();

  const idCheck = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(memberIdErr);
    if (memberId || !memberIdErr) {
      try {
        await axios
          .post(
            'http://localhost:5000/api/duplicationcheck',
            {
              memberId: memberId,
            }
          )
          .then((res) => {
            console.log(res.data);
            const message = res.data.message;
            const status = res.data.status;
            window.alert(message);
            if (status === 0) {
              setIdIsOk(true);
            } else if (status === 0) {
              setIdIsOk(false);
            }
          })
      } catch (error) {
        console.log(error)
      }
    } else {alert('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합');}
  }

  return {
    idIsOk,
    emailIsOk,
    idCheck,
  }
}

