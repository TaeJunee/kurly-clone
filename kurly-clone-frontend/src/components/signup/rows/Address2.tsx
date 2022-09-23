import styled from "styled-components"
import { InnerWrapper } from "./Address1"
import { InputField } from "./commonStyle";
import { useDispatch, useSelector } from 'react-redux'
import { setAddress2 } from '../../../features/auth/signupSlice'

export default function Address2() {
  const address2 = useSelector((state: any) => state.signup.address2);
  const dispatch = useDispatch();
  
  const onChangeAddress2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAddress2(e.target.value));
  }

  return (
    <ExtraAddress>
      <InnerWrapper>
        <InputField
          name="subAddress"
          placeholder="나머지 주소를 입력해주세요"
          type="text"
          value={address2}
          onChange={onChangeAddress2} />
      </InnerWrapper>
    </ExtraAddress>
  )
}

const ExtraAddress = styled.div`
  padding-bottom: 0px;
`