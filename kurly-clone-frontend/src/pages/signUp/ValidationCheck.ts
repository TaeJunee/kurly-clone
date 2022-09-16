import React, { useCallback, useState } from "react"
 
 export default function ValidationCheck() {
    const [memberId, setMemberId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordChk, setPasswordChk] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [extraAddress , setExtraAddress] = useState<string>('');
    const [birth, setBirth] = useState({year: '', month: '', day: ''})
    const [checked, setChecked] = useState<string>('');

    const [memberIdErr, setMemberIdErr] = useState<boolean>(false);
    const [passwordErr, setPasswordErr] = useState<number>(0);
    const [passwordChkErr, setPasswordChkErr] = useState<boolean>(false);
    const [nameErr, setNameErr] = useState<boolean>(false);
    const [emailErr, setEmailErr] = useState<boolean>(false);
    const [phoneErr, setPhoneErr] = useState<boolean>(false);

    const [memberIdErrMessage, setMemberIdErrMessage] = useState<string>('');
    const [passwordErrMessage, setPasswordErrMessage] = useState<string>('');
    const [passwordChkErrMessage, setPasswordChkErrMessage] = useState<string>('');
    const [nameErrMessage, setNameErrMessage] = useState<string>('');
    const [emailErrMessage, setEmailErrMessage] = useState<string>('');
    const [phoneErrMessage, setPhoneErrMessage] = useState<string>('');

    const [isActive, setIsActive] = useState(false);

    const onChangeMemberId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const memberIdRegEx = /^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){6,16}$/;
      if (!e.target.value || memberIdRegEx.test(e.target.value)) {
        setMemberIdErr(false);
      } else {
        setMemberIdErr(true);
        setMemberIdErrMessage('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합');
      }
      setMemberId(e.target.value); 
  }, [])

    const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegEx =  /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?=[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,16}$/;
      setPassword(e.target.value);
      if (!e.target.value || passwordRegEx.test(e.target.value)) {
        setPasswordErr(0);
      } else if (e.target.value.length < 10) {
        setPasswordErr(1);
        setPasswordErrMessage('최소 10자 이상 입력');
      } else {
        setPasswordErr(2);
        setPasswordErrMessage('영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합');
      }
    }, [])

    const onChangePasswordChk = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordChk(e.target.value);
      if (e.target.value === password) {
        setPasswordChkErr(false);
      } else {
        setPasswordChkErr(true);
        setPasswordChkErrMessage('동일한 비밀번호를 입력');
      }

    }, [password])

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.value) {
        setNameErr(true);
        setNameErrMessage('이름을 입력해주세요');
      } else {
        setNameErr(false);
      }
      setName(e.target.value);
    }
    
    const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
      if (!e.target.value || emailRegEx.test(e.target.value)) {
        setEmailErr(false);
      } else {
        setEmailErr(true);
        setEmailErrMessage('이메일 형식으로 입력해주세요');
      }
      setEmail(e.target.value); 
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
        setPhoneErrMessage('휴대폰 번호를 입력해주세요');
      }
      setPhone(e.target.value);
    }, [])

    const onChangeExtraAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
      setExtraAddress(e.target.value);
    }

    const onChangeBirthYear = (e: React.ChangeEvent<HTMLInputElement>) => {
      setBirth((prevState) => {
        return {...prevState, year: e.target.value};
      })
    }

    const onChangeBirthMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
      setBirth((prevState) => {
        return {...prevState, month: e.target.value};
      })
    }

    const onChangeBirthDay = (e: React.ChangeEvent<HTMLInputElement>) => {
      setBirth((prevState) => {
        return {...prevState, day: e.target.value};
      })
    }

    const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.value);
    }

    return {
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
    }
  }
  
  