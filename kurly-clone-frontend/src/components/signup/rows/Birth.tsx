import styled from 'styled-components'
import { InnerWrapper } from './Address1';
import { InputWrap, InputWrapper, LabelText, LeftWrapper, MiddleWrapper, RightWrapper } from './commonStyle';
import { useDispatch, useSelector } from 'react-redux'
import { setBirthYear, setBirthMonth, setBirthDay } from '../../../features/auth/signupSlice'

export default function Email() {

  const birthYear = useSelector((state: any) => state.signup.birthYear);
  const birthMonth = useSelector((state: any) => state.signup.birthMonth);
  const birthDay = useSelector((state: any) => state.signup.birthDay);
  const dispatch = useDispatch();

  type Birth = {
    name: string;
    placeholder: string;
    value: string;
    maxLength: number;
    onChange: any;
  }

  const onChangeBirthYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBirthYear(e.target.value));
  }

  const onChangeBirthMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBirthMonth(e.target.value));
  }

  const onChangeBirthDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBirthDay(e.target.value));
  }
  
  const birthType: Birth[] = [
    {
      name: "birthYear",
      placeholder: "YYYY",
      value: birthYear,
      maxLength: 4,
      onChange: onChangeBirthYear,
    },
    {
      name: "birthMonth",
      placeholder: "MM",
      value: birthMonth,
      maxLength: 2,
      onChange: onChangeBirthMonth,
    },
    {
      name: "birthDay",
      placeholder: "DD",
      value: birthDay,
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
                  value={item.value}
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