import styled from 'styled-components'
import { login } from '../../api/auth'
import { useMutation } from '@tanstack/react-query'

type InputValue = {
  memberId: string;
  password: string;
}

export default function LogIn({ memberId, password }: InputValue) {
  const loginMutate = useMutation(login, {
    onSuccess: ({ data }) => { console.log(data); },
    onError: ({ data }) => { console.log(data); },
  })
  
  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    loginMutate.mutate({ memberId, password });
  }
  
  return (
    <LogInButton onClick={ handleLogin }>
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