import { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Timer from './Timer';
import { isTimeover, timeout } from '../../redux/features/timerSlice';
import axios from 'axios';
import { propsType } from './propsType';
import { useDispatch } from 'react-redux';

export default function PhoneCheck({ phone }: propsType) {
  const isTimeout = useSelector(isTimeover);
  const dispatch = useDispatch();
  const [code, setCode] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);

  const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(isTimeout)
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

  const sendCode = async (e:  React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try{
      await axios
      .post('http://localhost:5000/api/auth/smscheck/isvalidate',
        {
          tel: phone,
          code,
        })
      .then(res => {
        const errCode = res.data.errorCode;
        const message = res.data.message;
        if (errCode === 1) {
          dispatch(timeout());
        } 
        window.alert(message);
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <InputWrapper>
      <LeftWrapper>
      </LeftWrapper>
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
      <Button type="button" disabled={ !isActive && !isTimeout } onClick={sendCode}>
        <span>인증번호 확인</span>
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
  &:disabled {
    border-color: rgb(221, 221, 221);
    color: rgb(221, 221, 221);
    cursor: default;
  }
`
