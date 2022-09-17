import styled from 'styled-components'
import GlobalHeader from '../../components/common/globalHeader/GlobalHeader'
import GlobalFooter from '../../components/common/globalFooter/GlobalFooter'
import Form from '../../components/signup/Form'
import SignUp from './SignUp'
import ValidationCheck from './ValidationCheck'
import SearchPostcode from '../../components/signup/SearchPostCode'

export default function SignUpPage() {

  const {
    isComplete,
    address,
    handleClick,
  } = SearchPostcode()

  const {
    checked,
    memberId,
    password,
    passwordChk,
    name,
    email,
    phone,
    extraAddress,
    birth,
    memberIdErr,
    memberIdErrMessage,
    passwordErr,
    passwordErrMessage,
    passwordChkErr,
    passwordChkErrMessage,
    nameErr,
    emailErr,
    emailErrMessage,
    phoneErr,
    phoneErrMessage,
    nameErrMessage,
    isActive,
    onChangeMemberId,
    onChangePassword,
    onChangePasswordChk,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangeExtraAddress,
    onChangeRadio,
    onChangeBirthYear,
    onChangeBirthMonth,
    onChangeBirthDay,
  } = ValidationCheck()

  return (
    <>
    <GlobalHeader/>
    <MainWrapper>
      <SignUpText>회원가입</SignUpText>
      <SignUpWrapper>
        <TopBorder>
          <Star>*</Star> 필수입력사항
        </TopBorder>
        <Form 
          memberId={memberId}
          password={password}
          passwordChk={passwordChk}
          name={name}
          email={email}
          phone={phone}
          address={address}
          extraAddress={extraAddress}
          checked={checked}
          birth={birth}
          memberIdErr={memberIdErr}
          passwordErr={passwordErr}
          passwordChkErr={passwordChkErr}
          nameErr={nameErr}
          emailErr={emailErr}
          phoneErr={phoneErr}
          memberIdErrMessage={memberIdErrMessage}
          passwordErrMessage={passwordErrMessage}
          passwordChkErrMessage={passwordChkErrMessage}
          nameErrMessage={nameErrMessage}
          emailErrMessage={emailErrMessage}
          phoneErrMessage={phoneErrMessage}
          isActive={isActive}
          isComplete={isComplete}
          onChangeMemberId={onChangeMemberId}
          onChangePassword={onChangePassword}
          onChangePasswordChk={onChangePasswordChk}
          onChangeName={onChangeName}
          onChangeEmail={onChangeEmail}
          onChangePhone={onChangePhone}
          handleClick={handleClick}
          onChangeExtraAddress={onChangeExtraAddress}
          onChangeGender={onChangeRadio}
          onChangeBirthYear={onChangeBirthYear}
          onChangeBirthMonth={onChangeBirthMonth}
          onChangeBirthDay={onChangeBirthDay} />
        <BottomBorder/>
        <SignUpBtnWrapper>
          <SignUp 
            memberId={memberId}
            password={password}
            name={name}
            email={email}
            phone={phone}
            address={address}
            extraAddress={extraAddress}
            checked={checked}
            birth={birth}
            memberIdErr={memberIdErr}
            passwordErr={passwordErr}
            passwordChkErr={passwordChkErr}
            nameErr={nameErr}
            emailErr={emailErr}
            phoneErr={phoneErr} />
        </SignUpBtnWrapper>
      </SignUpWrapper>
    </MainWrapper>
    <GlobalFooter/>
    </>
  )
}

const MainWrapper = styled.div`
  min-width: 1050px;
  margin-top: 50px;
  margin-bottom: 60px;
  background-color: #fff;
`

const SignUpText = styled.div`
  margin-bottom: 50px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 500;
  text-align: center;
  letter-spacing: -1px;
  color: #333;
`

const SignUpWrapper = styled.div`
  width: 640px;
  margin: 0px auto;
`

const TopBorder = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(51, 51, 51);
  font-size: 12px;
  color: rgb(102, 102, 102);
  line-height: 17px;
  text-align: right;
`

const BottomBorder = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid rgb(51, 51, 51);
`

const Star = styled.span`
  color: rgb(238, 106, 123);
`

const SignUpBtnWrapper = styled.div`
display: flex;
justify-content: center;
border-top: 1px solid rgb(247, 247, 247);
padding: 40px 0px;
`