import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  memberIdErr: false,
  passwordErr: 0,
  passwordChkErr: 0,
  nameErr: false,
  emailErr: false,
  phoneErr: false,
  errMessage: '',
}

const validationSlice = createSlice({
  name: 'validation',
  initialState,
  reducers: {
    memberId: (state, action) => {
      state.memberIdErr = true;
      state.errMessage = action.payload;
    },
    password1: (state) => {
      state.passwordErr = 1;
    },
    password2: (state) => {
      state.passwordErr = 2;
    }
  }
}) 