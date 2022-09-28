import Alert from '../Alert'
import ValidationCheck from '../../../util/signup/validationCheck'
import { InputWrapper, LeftWrapper, LabelText, Star, MiddleWrapper, RightWrapper, InputWrap, InputField, Button } from './commonStyle'
import { useDispatch, useSelector } from 'react-redux'
import { setMemberId } from '../../../features/auth/signupSlice'
import { useMutation } from '@tanstack/react-query'
import { idDuplicationCheck } from '../../../api/auth'

export default function MemberId() {
  const ERROR_MESSAGE = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합'
  const { memberIdErr } = ValidationCheck();
  const memberId = useSelector((state: any) => state.signup.memberId);
  const dispatch = useDispatch();
  
  const idCheckMutation = useMutation(idDuplicationCheck, {
    onSuccess: (data) => window.alert(data.payload),
    onError: (data) => window.alert(data)
  });
  
  const idCheck = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (memberId && !memberIdErr) {
      idCheckMutation.mutate({ memberId });
    } else window.alert(ERROR_MESSAGE);
  }

  const onChangeMemberId = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMemberId(e.target.value));
  }
  return (
    <InputWrapper>
      <LeftWrapper>
        <LabelText>아이디 <Star>*</Star></LabelText>
      </LeftWrapper>
      <MiddleWrapper>
        <InputWrap>
        <InputField
          id='memberId'
          name='memberId'
          type='text'
          placeholder='아이디를 입력해주세요'
          maxLength={16}
          value={memberId}
          onChange={onChangeMemberId} />
        </InputWrap>
        { memberIdErr && <Alert message={ ERROR_MESSAGE }/> }
      </MiddleWrapper>
      <RightWrapper>
      <Button type="button" onClick={idCheck}>
        <span>중복확인</span>
      </Button>
      </RightWrapper>
    </InputWrapper>
  )
}
