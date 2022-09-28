import axios from "axios"

const BASE_URL = 'http://localhost:8080';

type SignupData = {
  memberId: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  gender?: string;
  birthYear?: string;
  birthMonth?: string;
  birthDay?: string;
}

type LoginData = {
  memberId: string;
  password: string;
}

type VerifyPhone = {
  phone: string;
  code: string;
}

type DuplicationCheck= {
  memberId?: string;
  email?: string;
}

const signup = async ({ memberId, password, name, email, phone, address1, address2, gender, birthYear, birthMonth, birthDay }: SignupData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/signup`, {
      memberId,
      password,
      name,
      email,
      phone,
      address1,
      address2,
      gender,
      birthYear,
      birthMonth,
      birthDay,
    })
    console.log(data);
    return data;
  } catch (e: any) {
    console.log(e)
    throw Error(e);
  }
}

const login = async({ memberId, password }: LoginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signin`, {
      memberId,
      password,
    })
    return response;
  } catch (e: any) {
    throw Error(e);
  }
}
const requestVerify = async (to: string) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/sms/send`, { to })
    return data;
  } catch (e: any) {
    throw Error(e);
  }
}
const verifyPhone = async ({ phone, code }: VerifyPhone) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/authenticate`,{
      phone,
      code
    })
    return data;
  } catch (e: any) {
    throw Error(e);
  }
}

const idDuplicationCheck = async ({ memberId }: DuplicationCheck) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/idduplicationcheck`,
    {
      memberId,
    })
    return data;
  } catch (e: any) {
    throw Error(e);
  }
}

const emailDuplicationCheck = async ({ email }: DuplicationCheck) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/emailduplicationcheck`,
    {
      email,
    })
    return data;
  } catch (e: any) {
    throw Error(e);
  }
}

export { signup, login, verifyPhone, idDuplicationCheck, emailDuplicationCheck, requestVerify }