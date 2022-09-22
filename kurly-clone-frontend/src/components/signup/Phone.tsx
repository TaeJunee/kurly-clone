import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import Alert from './Alert'
import { startCount } from '../../redux/features/timerSlice'
import { propsType } from './propsType'
import { isTimeover } from '../../redux/features/timerSlice'
import axios from 'axios';

export default function Phone({ phone, phoneErr, phoneErrMessage, onChangePhone, isActive }: propsType) {
  const isTimeout = useSelector(isTimeover);
  const dispatch = useDispatch();

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
        {phoneErr && <Alert message={phoneErrMessage as string}/>}
      </MiddleWrapper>
      <RightWrapper>
      <Button type="button" disabled={!isActive || !isTimeout} onClick={ onClickHandler }>
        <span>인증번호 받기</span>
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
  &:disabled {
    border-color: rgb(221, 221, 221);
    color: rgb(221, 221, 221);
    cursor: default;
  }
`