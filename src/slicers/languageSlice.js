import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLanguage: 'FR',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.currentLanguage = state.currentLanguage === 'FR' ? 'EN' : 'FR';
    },
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;