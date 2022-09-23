import { useState } from 'react'
import ValidationCheck from '../../../util/signup/validationCheck'
import Alert from '../Alert'
import { InputField, InputWrap, InputWrapper, LabelText, LeftWrapper, MiddleWrapper, RightWrapper, Star } from './commonStyle'
import { useDispatch, useSelector } from 'react-redux'
import { setPassword } from '../../../features/auth/signupSlice'

export default function Password() {
  const { passwordErr } = ValidationCheck();
  const [passwordChk, setPasswordChk] = useState<string>('');
  const ERROR_MESSAGE = ['최소 10자 이상 입력', '영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합', '동일한 비밀번호를 입력'];
  const password = useSelector((state: any) => state.signup.password);
  const dispatch = useDispatch();
  
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  }

  return (
    <>
    <InputWrapper>
      <LeftWrapper>
        <LabelText>비밀번호 <Star>*</Star></LabelText>
      </LeftWrapper>
      <MiddleWrapper>
        <InputWrap>
        <InputField
          id='password'
          name='password'
          type='password'
          placeholder='비밀번호를 입력해주세요'
          value={password}
          onChange={onChangePassword} />
        </InputWrap>
        { passwordErr === 1 && <Alert message={ ERROR_MESSAGE[0] } /> }
        { passwordErr === 2 && <Alert message={ ERROR_MESSAGE[1] } /> }
      </MiddleWrapper>
      <RightWrapper></RightWrapper>
    </InputWrapper>
    <InputWrapper>
    <LeftWrapper>
      <LabelText>비밀번호확인 <Star>*</Star></LabelText>
    </LeftWrapper>
    <MiddleWrapper>
      <InputWrap>
      <InputField
        id='passwordConfirm'
        name='passwordConfirm'
        type='password'
        placeholder='비밀번호를 한번 더 입력해주세요'
        value={passwordChk}
        onChange={ (e) => { setPasswordChk(e.target.value) }} />
      </InputWrap>
      {password !== passwordChk && <Alert message={ ERROR_MESSAGE[2] } />}
    </MiddleWrapper>
    <RightWrapper></RightWrapper>
  </InputWrapper>
  </>
  )
}
