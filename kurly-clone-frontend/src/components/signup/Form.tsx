import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Address from './rows/Address1'
import Email from './rows/Email'
import MemberId from './rows/MemberId'
import Name from './rows/Name'
import Password from './rows/Password'
import Phone from './rows/Phone'
import Gender from './rows/Gender'
import Birth from './rows/Birth'
import VerifyPhone from './rows/VerifyPhone'
import { isTimeover } from '../../features/timer/timerSlice'

export default function Form() {
  const isTimeout = useSelector(isTimeover);
  return (
    <InputContainer>
      <MemberId />
      <Password />
      <Name />
      <Email />
      <Phone />
      {!isTimeout && <VerifyPhone />}
      <Address />
      <Gender />
      <Birth />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  padding: 0px;
`