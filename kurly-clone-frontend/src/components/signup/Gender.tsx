import styled, { css } from 'styled-components'
import { propsType } from './propsType';

export default function Gender({ checked, onChangeGender }: propsType) {

  type RadioInputField = {
    id: string;
    value: string;
    text: string;
  }
  
  const genderRadio: RadioInputField[] = [
    {
      id: "gender-man",
      value: "MALE",
      text: "남자",
    },
    {
      id: "gender-woman",
      value: "FEMALE",
      text: "여자",
    },
    {
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
                  checked={checked === item.value}
                  onChange={onChangeGender}/>
                <RadioBtn checked={checked === item.value}><div></div></RadioBtn>
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

const InputWrap = styled.div`
  position: relative;
  padding-bottom: 0px;
`

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