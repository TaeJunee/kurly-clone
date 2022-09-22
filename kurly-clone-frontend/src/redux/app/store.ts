import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../features/userSlice'
import categoryReducer from '../features/categorySlice'
import timerReducer from '../features/timerSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    timer: timerReducer,
  }
})