import styled from 'styled-components'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login }  from '../../redux/features/userSlice'


type propsType = {
  memberId: string;
  password: string;
}

export default function LogIn({ memberId, password }: propsType) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios
        .post(
          'http://localhost:8080/api/auth/signin',
          {
            memberId: memberId,
            password: password,
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            if (res.data.status === 1) {
              dispatch((login(res.data)));
              navigate('../');
            } else {
              window.alert(res.data.message);
            }
            
        }})
      } catch (error) {
        console.log(error);
      }
  }

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   dispatch(loginAction(
  //     {memberId: memberId, password: password}
  //   ))
  // }


  return (
    <LogInButton onClick={handleLogin}>
      <Span>로그인</Span>
    </LogInButton>
  )
}

const LogInButton = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 54px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: 0px none;
`

const Span = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
`