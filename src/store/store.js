import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../slicers/themeSlice'
import languageReducer from '../slicers/languageSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});