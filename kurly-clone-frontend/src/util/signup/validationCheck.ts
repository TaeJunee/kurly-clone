import React, { useCallback, useState } from "react"
 
export default function ValidationCheck() {
  const [memberIdErr, setMemberIdErr] = useState<boolean>(false);
  const [passwordErr, setPasswordErr] = useState<number>(0);
  const [nameErr, setNameErr] = useState<boolean>(false);
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [phoneErr, setPhoneErr] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(false);

  const onChangeMemberId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const memberIdRegEx = /^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){6,16}$/;
    if (!e.target.value || memberIdRegEx.test(e.target.value)) {
      setMemberIdErr(false);
    } else {
      setMemberIdErr(true);
    }
  }, [])

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegEx =  /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?=[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,16}$/;
    let password = e.target.value;
    if (!password || passwordRegEx.test(e.target.value)) {
      setPasswordErr(0);
    } else if (e.target.value.length < 10) {
      setPasswordErr(1);
    } else {
      setPasswordErr(2);
    }
  }, [])

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
  }
    
  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    if (!e.target.value || emailRegEx.test(e.target.value)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  }, [])

  const onChangePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const numRegEx = /[0-9]$/g;
    const phoneRegEx = /^01([0|1|6|7|8|9])([0-9]{4})([0-9]{4})$/;
    if (numRegEx.test(e.target.value)) {
      if (phoneRegEx.test(e.target.value)) {
        setPhoneErr(false);
        setIsActive(true);
      } else {
        setPhoneErr(false);
        setIsActive(false);
      }
    } else {
      e.target.value = e.target.value.replace(/[^0-9]/g,'');
      setPhoneErr(true);
      setIsActive(false);
    }
  }, [])

  return {
    memberIdErr,
    passwordErr,
    nameErr,
    emailErr,
    phoneErr,
    isActive,
    onChangeMemberId,
    onChangePassword,
    onChangeName,
    onChangeEmail,
    onChangePhone,
  }
}
  
  