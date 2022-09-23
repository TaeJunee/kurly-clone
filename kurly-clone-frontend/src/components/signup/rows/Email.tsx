import ValidationCheck from '../../../util/signup/validationCheck';
import Alert from '../Alert'
import { Button, InputField, InputWrap, InputWrapper, LabelText, LeftWrapper, MiddleWrapper, RightWrapper, Star } from './commonStyle';
import { useDispatch, useSelector } from 'react-redux'
import { setEmail } from '../../../features/auth/signupSlice'
import { useMutation } from '@tanstack/react-query'
import { emailDuplicationCheck } from '../../../api/auth';

export default function Email() {
  const { emailErr } = ValidationCheck();
  const ERROR_MESSAGE = '이메일 형식으로 입력해주세요';
  const email = useSelector((state: any) => state.signup.email);
  const dispatch = useDispatch();
  
  const emailCheckMutation = useMutation(emailDuplicationCheck, {
    onSuccess: (data) => console.log(data),
    onError: (data) => console.log(data),
  })
  
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  }

  const emailCheck = () => {
    if (email && !emailErr) {
      emailCheckMutation.mutate({ email });
    }
  }
  return (
    <InputWrapper>
      <LeftWrapper>
        <LabelText>이메일 <Star>*</Star></LabelText>
      </LeftWrapper>
      <MiddleWrapper>
        <InputWrap>
        <InputField
          id='email'
          name='email'
          type='text'
          placeholder='예: marketkurly@kurly.com'
          value={email}
          onChange={onChangeEmail} />
        </InputWrap>
        { emailErr && <Alert message={ERROR_MESSAGE}/> }
      </MiddleWrapper>
      <RightWrapper>
      <Button type="button" onClick={emailCheck}>
        <span>중복확인</span>
      </Button>
      </RightWrapper>
    </InputWrapper>
  )
}
