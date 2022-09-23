import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { selectUser } from '../../../features/auth/userSlice';

export default function Joins() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <Container>
      {user
        ? <UserWrapper>
            <UserName>{user.name} 님</UserName>
          </UserWrapper>
        : <>
          <SignUp onClick={() => navigate('/signup')}>회원가입</SignUp>
          <JoinsBar></JoinsBar>
          <LogIn onClick={() => navigate('/login')}>로그인</LogIn>
          </>}
      <JoinsBar></JoinsBar>
      <CustomerCenter>
        <a>고객센터<More></More></a>
        <CustomerCenterMenu>
          <div>공지사항</div>
          <div>자주하는 질문</div>
          <div>1:1 문의</div>
          <div>대량주문 문의</div>
        </CustomerCenterMenu>
      </CustomerCenter>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 20;
  display: flex;
  align-items: center;
  font-size: 12px;
`

const UserWrapper = styled.div`
  line-height: 35px;
  position: relative;
`

const UserName = styled.a`
  display: block;
  cursor: pointer;
`


const SignUp = styled.a`
  display: block;
  color: rgb(95, 0, 128);
  cursor: pointer;
`

const LogIn = styled.a`
  display: block;
  cursor: pointer;
`

const CustomerCenterMenu = styled.div`
  display: none;
  position: absolute;
  right: 0px;
  top: 34ppx;
  width: 113px;
  padding: 3px 9px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);

  div {
    display: block;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
  }
`

const CustomerCenter = styled.div`
  line-height: 35px;
  position: relative;

  a {
    display: block;
    cursor: pointer;
  }

  &:hover ${CustomerCenterMenu} {
    display: block;
  }
`
const More = styled.span`
  width: 8px;
  height: 5px;
  background-image: url("https://res.kurly.com/pc/ico/1908/ico_down_16x10.png");
  background-size: cover;
  background-position: center center;
  display: inline-block;
  margin-left: 5px;
  margin-bottom: 1px;
` 

const JoinsBar = styled.div`
  width: 1px;
  height: 13px;
  margin: 0px 12px;
  background-color: rgb(217, 217, 217);
`