import ValidationCheck from '../../../util/signup/validationCheck'
import Alert from '../Alert'
import { InputField, InputWrap, InputWrapper, LabelText, LeftWrapper, MiddleWrapper, RightWrapper, Star } from './commonStyle'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../../features/auth/signupSlice'

export default function Name() {
  const { nameErr } = ValidationCheck();
  const ERROR_MESSAGE = '이름을 입력해주세요';
  const name = useSelector((state: any) => state.signup.name);
  const dispatch = useDispatch();
  
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  }
  return (
    <InputWrapper>
      <LeftWrapper>
        <LabelText>이름 <Star>*</Star></LabelText>
      </LeftWrapper>
      <MiddleWrapper>
        <InputWrap>
        <InputField
          id='name'
          name='name'
          type='text'
          placeholder='이름을 입력해주세요'
          maxLength={20}
          value={name}
          onChange={onChangeName} />
        </InputWrap>
        { nameErr && <Alert message={ERROR_MESSAGE} />}
      </MiddleWrapper>
      <RightWrapper></RightWrapper>
    </InputWrapper>
  )
}