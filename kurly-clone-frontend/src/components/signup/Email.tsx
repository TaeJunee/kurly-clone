import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components'
import Alert from './Alert'
import { propsType } from './propsType'

export default function Email({ email, emailErr, emailErrMessage, onChangeEmail }: propsType) {
  const [canUseEmail, setCanUseEmail] = useState<boolean>(false);

  const emailCheck = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email ) {
      window.alert('이메일을 입력해주세요.');
    } else if (emailErr) {
      window.alert('이메일 형식으로 입력해주세요.')
    } else{
      try {
        await axios
          .post(
            'http://localhost:8080/api/auth/emailduplicationcheck',
            {
              email
            }
          )
          .then((res) => {
            window.alert(res.data.payload);
          })
      } catch (error) {
        console.log(error);
        window.alert("사용 불가능한 이메일입니다.")
      }
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
        {emailErr && <Alert message={emailErrMessage as string}/>}
      </MiddleWrapper>
      <RightWrapper>
      <Button type="button" onClick={emailCheck}>
        <span>중복확인</span>
      </Button>
      </RightWrapper>
    </InputWrapper>
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

const Button = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 44px;
  border-radius: 3px;
  color: rgb(95, 0, 128);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(95, 0, 128);
  span {
    font-weight: 500;
    font-size: 14px;
    display: inline-block;
  }
`