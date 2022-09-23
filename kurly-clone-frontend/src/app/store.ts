import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../features/auth/userSlice'
import categoryReducer from '../features/category/categorySlice'
import timerReducer from '../features/timer/timerSlice'
import signupReducer from '../features/auth/signupSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    timer: timerReducer,
    signup: signupReducer,
  },
})