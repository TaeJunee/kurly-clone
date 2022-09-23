import Alert from '../Alert'
import { startCount } from '../../../features/timer/timerSlice'
import { isTimeover } from '../../../features/timer/timerSlice'
import axios from 'axios';
import { Button, InputField, InputWrap, InputWrapper, LabelText, LeftWrapper, MiddleWrapper, RightWrapper, Star } from './commonStyle';
import ValidationCheck from '../../../util/signup/validationCheck';
import { useDispatch, useSelector } from 'react-redux'
import { setPhone } from '../../../features/auth/signupSlice'

export default function Phone() {
  const { phoneErr, isActive } = ValidationCheck();
  
  const ERROR_MESSAGE = '휴대폰 번호를 입력해주세요';
  const isTimeout = useSelector(isTimeover);
  const phone = useSelector((state: any) => state.signup.phone);
  const dispatch = useDispatch();
  
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhone(e.target.value));
  }

  const onClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:8080/api/auth/sms/send',
        {
          to: phone,
        })
        .then(res => {
          console.log(res);
        })
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(startCount());
    }
  }

  return (
    <InputWrapper>
      <LeftWrapper>
        <LabelText>휴대폰 <Star>*</Star></LabelText>
      </LeftWrapper>
      <MiddleWrapper>
        <InputWrap>
        <InputField
          id='mobileNumber'
          name='mobileNumber'
          type='tel'
          placeholder='휴대전화 번호를 입력해주세요'
          maxLength={11}
          value={phone}
          readOnly={!isTimeout}
          onChange={onChangePhone} />
        </InputWrap>
        { phoneErr && <Alert message={ERROR_MESSAGE}/>}
      </MiddleWrapper>
      <RightWrapper>
      <Button type="button" disabled={ !isActive || !isTimeout } onClick={ onClickHandler }>
        <span>인증번호 받기</span>
      </Button>
      </RightWrapper>
    </InputWrapper>
  )
}
