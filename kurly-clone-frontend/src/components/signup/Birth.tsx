import styled from 'styled-components'
import { propsType } from './propsType';

export default function Email({ onChangeBirthYear, onChangeBirthMonth, onChangeBirthDay }: propsType) {

  type Birth = {
    name: string;
    placeholder: string;
    maxLength: number;
    onChange: any;
  }
  
  const birthType: Birth[] = [
    {
      name: "birthYear",
      placeholder: "YYYY",
      maxLength: 4,
      onChange: onChangeBirthYear,
    },
    {
      name: "birthMonth",
      placeholder: "MM",
      maxLength: 2,
      onChange: onChangeBirthMonth,
    },
    {
      name: "birthDay",
      placeholder: "DD",
      maxLength: 2,
      onChange: onChangeBirthDay,
    },
  ]
  
  return (
    <InputWrapper>
      <LeftWrapper>
        <LabelText>생년월일</LabelText>
      </LeftWrapper>
      <MiddleWrapper>
        <InputWrap>
        <BirthContainer>
          {birthType.map((item, index) => (
            <>
            <Wrapper>
              <InnerWrapper>
                <BirthInput
                  key={index}
                  name={item.name}
                  placeholder={item.placeholder}
                  type="text"
                  maxLength={item.maxLength}
                  onChange={item.onChange} />
              </InnerWrapper>
            </Wrapper>
            <Slash/>
            </>
          ))}
        </BirthContainer>
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

const BirthContainer = styled.div`
  height: 44px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 3px;
  padding: 0px 15px;
`

const Wrapper = styled.div`
  padding-bottom: 0px;
  input {
    text-align: center;
    font-size: 14px;
    border: none;
  }
`

const InnerWrapper = styled.div`
  posiiton: relative;
  height: 40px;
`

const BirthInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
  line-height: 38px;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;
`

const Slash = styled.span`
  height: 100%;
  &::after {
    content: "/";
    font-size: 14px;
    color: rgb(204, 204, 204);
    text-align: center;
    line-height: 40px;
    }
  &:last-of-type {
    display: none;
    }
  }
`