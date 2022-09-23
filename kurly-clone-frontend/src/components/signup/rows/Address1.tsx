import styled from 'styled-components'
import Address2 from './Address2'
import { useState } from 'react'
import { InputField, InputWrap, InputWrapper, LabelText, LeftWrapper, MiddleWrapper, RightWrapper, Star } from './commonStyle'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress1 } from '../../../features/auth/signupSlice'

export default function Address() {
  const open = useDaumPostcodePopup();
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const dispatch = useDispatch();
  const address1 = useSelector((state: any) => state.signup.address1);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setIsComplete(true);
    dispatch(setAddress1(fullAddress));
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <InputWrapper>
      <LeftWrapper>
        <LabelText>주소 <Star>*</Star></LabelText>
      </LeftWrapper>
      <MiddleWrapper>
        <InputWrap>
          {!isComplete && 
            <SearchAddress onClick={handleClick}>
              <span>
                <img src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg" />주소 검색
              </span>
            </SearchAddress>}
          {isComplete && 
            <>
            <MainAddress>
              <InnerWrapper>
                <InputField
                  name="address"
                  placeholder="주소를 검색해주세요"
                  type="text"
                  value={address1}
                  readOnly
                />
              </InnerWrapper>
            </MainAddress>
            <Address2 />
            </>}
        </InputWrap>
      </MiddleWrapper>
      <RightWrapper>
        {isComplete && <Button type="button" onClick={handleClick}>
          <span>
            <img src='https://res.kurly.com/pc/service/cart/2007/ico_search.svg' />
            재검색
          </span>
        </Button>}
      </RightWrapper>
    </InputWrapper>
  )
}

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
    img {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 4px;
      vertical-align: middle;
    }
  }
  &:disabled {
    border-color: rgb(221, 221, 221);
    color: rgb(221, 221, 221);
    cursor: default;
  }
`

const SearchAddress = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 44px;
  border-radius: 4px;
  color: rgb(95, 0, 128);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(95, 0, 128);
  span {
    font-size: 14px;
    font-weight: 500;
    img {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 4px;
      vertical-align: middle;
    }
  }
`

const MainAddress = styled.div`
  padding-bottom: 12px;
`

export const InnerWrapper = styled.div`
  position: relative;
  height: 48px;
`