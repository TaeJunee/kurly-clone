import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalHeader from '../../components/common/globalHeader/GlobalHeader'
import GlobalFooter from '../../components/common/globalFooter/GlobalFooter'
import LogIn from './LogIn'

function LogInPage() {
  const [memberId, setMemberId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  return (
    <>
      <GlobalHeader />
      <Wrapper>
        <LogInText>로그인</LogInText>
        <LogInArea>
          <form style={{ display: "block" }}>
            <InputWrap>
              <IdWrapper>
                <InnerWrapper>
                  <Input
                    name="email"
                    placeholder="아이디를 입력해주세요"
                    type="text"
                    value={memberId}
                    onChange={ (e) => setMemberId(e.target.value) } />
                </InnerWrapper>
              </IdWrapper>
              <PwWrapper>
                <InnerWrapper>
                  <Input
                    name="passsword"
                    placeholder="비밀번호를 입력해주세요"
                    type="password"
                    autoComplete='off'
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) } />
                </InnerWrapper>
              </PwWrapper>
            </InputWrap>
            <FindWrap>
              <Find>아이디 찾기</Find>
              <Bar />
              <Find>비밀번호 찾기</Find>
            </FindWrap>
            <ButtonWrap>
              <LogIn memberId={ memberId } password={ password } />
              <SignUpButton onClick={() => navigate('/signup')}>
                <Span>회원가입</Span>
              </SignUpButton>
            </ButtonWrap>
          </form>
        </LogInArea>
      </Wrapper>
      <GlobalFooter />
    </>
  )
}

export default LogInPage

const Wrapper = styled.div`
  min-width: 1050px;
  margin-top: 90px;
  margin-bottom: 60px;
  background-color: rgb(255, 255, 255);
`

const LogInText = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
`

const LogInArea = styled.div`
  width: 340px;
  margin: 0px auto;
  letter-spacing: -0.6px;
`

const InputWrap = styled.div`
  margin-top: 30px;
`

const IdWrapper = styled.div`
  margin-bottom: 5px;
  padding-bottom: 12px;
`

const InnerWrapper = styled.div`
  position: relative;
  height: 48px;
`

const Input = styled.input`
  width: 100%;
  height: 54px;
  font-size: 14px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;
`

const PwWrapper = styled.div`
  padding-bottom: 12px;
`

const FindWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 13px;
`

const Find = styled.a`
  color: rgb(51, 51, 51);
  cursor: pointer;
`

const Bar = styled.span`
  width: 1px;
  height: 10px;
  margin: 3px 6px 0px;
  background-color: rgb(51, 51, 51);
`

const ButtonWrap = styled.div`
  margin-top: 28px;
  box-sizing: border-box;
`

const SignUpButton = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 54px;
  margin-top: 10px;
  border-radius: 3px;
  color: rgb(95, 0, 128);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(95, 0, 128);
}
`

const Span = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
`