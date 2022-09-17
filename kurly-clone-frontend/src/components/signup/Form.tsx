import styled from 'styled-components'
import Address from './Address'
import Email from './Email'
import Id from './Id'
import Name from './Name'
import Password from './Password'
import Phone from './Phone'
import Gender from './Gender'
import Birth from './Birth'
import { propsType } from './propsType'

export default function Form({ 
  memberId,
  password,
  passwordChk,
  name,
  email,
  phone,
  address,
  extraAddress,
  checked,
  birth,
  isActive,
  isComplete,
  memberIdErr,
  passwordErr,
  passwordChkErr,
  nameErr,
  emailErr,
  phoneErr,
  memberIdErrMessage,
  passwordErrMessage,
  passwordChkErrMessage,
  nameErrMessage,
  emailErrMessage,
  phoneErrMessage,
  onChangeMemberId,
  onChangePassword,
  onChangePasswordChk,
  onChangeName,
  onChangeEmail,
  onChangePhone,
  handleClick,
  onChangeExtraAddress,
  onChangeGender,
  onChangeBirthYear,
  onChangeBirthMonth,
  onChangeBirthDay,
}: propsType) {
  return (
    <InputContainer>
      <Id memberId={memberId} memberIdErr={memberIdErr} memberIdErrMessage={memberIdErrMessage} onChangeMemberId={onChangeMemberId} />
      <Password password={password} passwordChk={passwordChk} passwordErr={passwordErr} passwordChkErr={passwordChkErr} passwordErrMessage={passwordErrMessage} passwordChkErrMessage={passwordChkErrMessage} onChangePassword={onChangePassword} onChangePasswordChk={onChangePasswordChk}/>
      <Name name={name} nameErr={nameErr} nameErrMessage={nameErrMessage} onChangeName={onChangeName} />
      <Email email={email} emailErr={emailErr} emailErrMessage={emailErrMessage} onChangeEmail={onChangeEmail} />
      <Phone phone={phone} phoneErr={phoneErr} phoneErrMessage={phoneErrMessage} onChangePhone={onChangePhone} isActive={isActive} />
      <Address address={address} extraAddress={extraAddress} isComplete={isComplete} handleClick={handleClick} onChangeExtraAddress={onChangeExtraAddress} />
      <Gender checked={checked} onChangeGender={onChangeGender}/>
      <Birth birth={birth} onChangeBirthYear={onChangeBirthYear} onChangeBirthMonth={onChangeBirthMonth} onChangeBirthDay={onChangeBirthDay} />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  padding: 0px;
`