import styled from 'styled-components'
import Alert from './Alert'
import { propsType } from './propsType'

export default function Password({ password, passwordChk, passwordErr, passwordChkErr, passwordErrMessage, passwordChkErrMessage, onChangePassword, onChangePasswordChk }: propsType) {

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
        {passwordErr !== 0 && <Alert message={passwordErrMessage as string} />}
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
        onChange={onChangePasswordChk} />
      </InputWrap>
      {passwordChkErr && <Alert message={passwordChkErrMessage as string} />}
    </MiddleWrapper>
    <RightWrapper></RightWrapper>
  </InputWrapper>
  </>
  )
}

const InputWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 10px 20px;
`

const LeftWrapper = styled.div`
  width: 139px;
  padding-top: 12px;
`

const MiddleWrapper = styled.div`
  flex: 1 1 0%;
`

const RightWrapper = styled.div`
  width: 120px;
  margin-left: 8px;
  `

  const LabelText = styled.label`
  font-weight: 500;
  color: rgb(51, 51, 51);
  line-height: 20px;
`

  const Star = styled.span`
  color: rgb(238, 106, 123);
`

const InputWrap = styled.div`
  position: relative;
  padding-bottom: 0px;
`

const InputField = styled.input`
width: 100%;
height: 48px;
padding: 0px 11px 1px 15px;
border-radius: 4px;
border: 1px solid rgb(221, 221, 221);
font-weight: 400;
font-size: 16px;
line-height: 1.5;
color: rgb(51, 51, 51);
outline: none;
box-sizing: border-box;
`