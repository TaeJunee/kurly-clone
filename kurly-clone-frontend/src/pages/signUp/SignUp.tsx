import styled from "styled-components"
import { signup } from "../../api/auth"
import { useMutation } from '@tanstack/react-query'
import { useSelector } from "react-redux"

type ErrorType = {
  message: string;
}

const SignUp = () => {
  const memberId = useSelector((state: any) => state.signup.memberId);
  const password = useSelector((state: any) => state.signup.password);
  const name = useSelector((state: any) => state.signup.name);
  const email = useSelector((state: any) => state.signup.email);
  const phone = useSelector((state: any) => state.signup.phone);
  const address1 = useSelector((state: any) => state.signup.address1);
  const address2 = useSelector((state: any) => state.signup.address2);
  const gender = useSelector((state: any) => state.signup.gender);
  const birthYear = useSelector((state: any) => state.signup.birthYear);
  const birthMonth = useSelector((state: any) => state.signup.birthMonth);
  const birthDay = useSelector((state: any) => state.signup.birthDay);

  const signupMutate = useMutation(signup, {
    onError: (data: ErrorType) => { console.log(data) }
  })
  
  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signupMutate.mutate({ memberId, password, name, email, phone, address1, address2, gender, birthYear, birthMonth, birthDay })
  }
  return (
    <SignUpButton type="submit" onClick={handleSignup}>
      <span>가입하기</span>
    </SignUpButton>
  )
}

export default SignUp

const SignUpButton = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 240px;
  height: 56px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: 0px none;
  span {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
  }
`