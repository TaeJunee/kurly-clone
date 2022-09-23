import { createSlice } from "@reduxjs/toolkit"

type Member = {
  memberId: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  gender: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
}

export const initialState: Member = {
  memberId: '',
  password: '',
  name: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  gender: '',
  birthYear: '',
  birthMonth: '',
  birthDay: '',
}

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setMemberId: (state, action) => {
      state.memberId = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setAddress1: (state, action) => {
      state.address1 = action.payload;
    },
    setAddress2: (state, action) => {
      state.address2 = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setBirthYear: (state, action) => {
      state.birthYear = action.payload;
    },
    setBirthMonth: (state, action) => {
      state.birthMonth = action.payload;
    },
    setBirthDay: (state, action) => {
      state.birthDay = action.payload;
    },
  }})

export const { setMemberId, setPassword, setName, setEmail, setPhone, setAddress1, setAddress2, setGender, setBirthYear, setBirthMonth, setBirthDay } = signupSlice.actions
export const password = (state: any) => state.signup.password
export default signupSlice.reducer