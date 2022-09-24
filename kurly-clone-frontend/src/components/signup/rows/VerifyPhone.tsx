import { useState } from 'react'
import Timer from '../Timer';
import { isTimeover, timeout } from '../../../features/timer/timerSlice';
import { useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query'
import { Button, InputField, InputWrap, InputWrapper, LeftWrapper, MiddleWrapper, RightWrapper } from './commonStyle';
import { verifyPhone } from '../../../api/auth'
import { useDispatch } from 'react-redux';

export default function VerifyPhone() {
  const dispatch = useDispatch();
  const isTimeout = useSelector(isTimeover);
  const phone = useSelector((state: any) => state.signup.phone);
  const [code, setCode] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);

  const sendMutation = useMutation(verifyPhone, {
    onSuccess: (data) => {
      dispatch(timeout());
      window.alert(data.payload); },
    onError: (data) => console.log(data)
  })
  
  const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numRegEx = /[0-9]$/g;
    if (numRegEx.test(e.target.value)) {
      if (e.target.value) {
        setIsActive(true);
      } else { setIsActive(false); }
    } else {
      e.target.value = e.target.value.replace(/[^0-9]/g,'');
    }
    setCode(e.target.value);
  }

  const sendCode = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendMutation.mutate({ phone, code });
  }

  return (
    <InputWrapper>
      <LeftWrapper></LeftWrapper>
      <MiddleWrapper>
        <InputWrap>
        <InputField
          id='authCode'
          name='mobileNumber'
          type='text'
          required
          maxLength={6}
          value={code}
          onChange={onChangeCode} />
        <Timer />
        </InputWrap>   
      </MiddleWrapper>
      <RightWrapper>
      <Button type="button" disabled={!isActive && !isTimeout} onClick={sendCode}>
        <span>인증번호 확인</span>
      </Button>
      </RightWrapper>
    </InputWrapper>
  )
}