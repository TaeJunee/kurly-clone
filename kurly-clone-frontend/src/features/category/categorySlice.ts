import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    name: null,
    isSubMenu: false,
  },
  reducers: {
    subMenuUp: (state, action) => {
      state.name = action.payload;
      state.isSubMenu = true;
    },
    subMenuDown: (state) => {
      state.isSubMenu = false;
    },
    reset: (state) => {
      state.name = null;
    }
  }
})

export const { subMenuUp, subMenuDown, reset } = categorySlice.actions
export const currentCategory = (state: any) => state.category.name
export const currentStatus = (state: any) => state.category.isSubMenu
export default categorySlice.reducer