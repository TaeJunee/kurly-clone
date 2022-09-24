import { createSlice } from "@reduxjs/toolkit";

export const subCategorySlice = createSlice({
  name: 'subCategory',
  initialState: {
    name: null,
  },
  reducers: {
    setSubCategory: (state, action) => {
      state.name = action.payload;
    },
    unsetSubCategory: (state) => {
      state.name = null;
    },
  }
})

export const { setSubCategory, unsetSubCategory } = subCategorySlice.actions
export const currentSubCategory = (state: any) => state.subCategory.name
export default subCategorySlice.reducer