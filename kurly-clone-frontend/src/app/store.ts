import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../features/auth/userSlice'
import categoryReducer from '../features/category/categorySlice'
import timerReducer from '../features/timer/timerSlice'
import signupReducer from '../features/auth/signupSlice'
import subCategoryReducer from '../features/category/subCategorySlice'

export default configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    timer: timerReducer,
    signup: signupReducer,
  },
})