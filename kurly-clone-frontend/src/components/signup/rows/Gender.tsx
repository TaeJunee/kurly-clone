import styled from 'styled-components'
import { InputWrap, InputWrapper, LabelText, LeftWrapper, MiddleWrapper, RightWrapper } from './commonStyle';
import { useDispatch, useSelector } from 'react-redux'
import { setGender } from '../../../features/auth/signupSlice'

type RadioInputField = {
  id: string;
  value: string;
  text: string;
}

export default function Gender() {
  const gender = useSelector((state: any) => state.signup.gender);
  const dispatch = useDispatch();
  
  const onChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setGender(e.target.value));
  }

  const genderRadio: RadioInputField[] = [{
      id: "gender-man",
      value: "MALE",
      text: "남자",
    }, {
      id: "gender-woman",
      value: "FEMALE",
      text: "여자",
    }, {
      id: "gender-none",
      value: "NONE",
      text: "선택안함",
    },
  ]
  return (
    <InputWrapper>
      <LeftWrapper>
        <LabelText>성별</LabelText>
      </LeftWrapper>
      <MiddleWrapper>
        <InputWrap>
          <RadioContainer>
            {genderRadio.map((item, index) => (
              <RadioLabel key={index} htmlFor={item.id}>
                <RadioInput 
                  key={index}
                  id={item.id}
                  name="gender"
                  type="radio"
                  value={item.value}
                  checked={gender === item.value}
                  onChange={onChangeGender}/>
                <RadioBtn checked={gender === item.value}><div></div></RadioBtn>
                <RadioText>{item.text}</RadioText>
              </RadioLabel> 
            ))}
          </RadioContainer>
        </InputWrap>
      </MiddleWrapper>
      <RightWrapper></RightWrapper>
    </InputWrapper>
  )
}

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`
const RadioLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 0px 9px;
  span{
    font-size: 14px;
  }
`
const RadioInput = styled.input`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0px, 0px, 0px, 0px);
`
const RadioBtn = styled.span<{ checked: boolean }>`
  min-width: 24px;
  min-height: 24px;
  display: inline-block;
  position: relative;
  border-radius: 50%;
  background-color: ${({ checked }) => checked ? 'rgb(95, 0, 128)' : 'white' };
  border: 1px solid rgb(221, 221, 221);
  div {
    width: 10px;
    height: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${({ checked }) => checked ? 'white' : '' };
`
const RadioText = styled.span`
  position: relative;
  font-size: 16px;
  margin-left: 12px;
`