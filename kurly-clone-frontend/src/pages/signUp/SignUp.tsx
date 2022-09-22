import { useCallback, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { propsType } from "../../components/signup/propsType"
import { useCookies } from "react-cookie"

const SignUp = ({ memberId, password, name, email, phone, address, extraAddress, checked, birth, memberIdErr, passwordErr, passwordChkErr, nameErr, emailErr, phoneErr }: propsType) => {
  const navigate = useNavigate();
  
  const doSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!memberIdErr && !passwordErr && !passwordChkErr && !nameErr && !emailErr && !phoneErr) {
      try {
        await axios
          .post(
            'http://localhost:8080/api/auth/signup',
            {
              memberId: memberId,
              password: password,
              name: name,
              email: email,
              phone: phone,
              address1: address,
              address2: extraAddress,
              gender: checked,
              birthYear: birth?.year,
              birthMonth: birth?.month,
              birthDay: birth?.day,
            },
          )
          .then((res) => {
            window.alert(res.data.payload);
            navigate('/login');

    }
    )
      } catch (error) {
        window.alert('입력한 내용을 다시 한 번 확인해주세요.')
      }
    } else {alert('입력한 내용을 다시 한 번 확인해주세요.');}
  }
 
  return (
    <SignUpButton type="submit" onClick={doSignUp}>
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