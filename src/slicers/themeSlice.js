import { createSlice } from '@reduxjs/toolkit';

// Fonction pour charger le thème depuis le localStorage
const loadThemeFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  }
  return false;
};

// Initial state avec la valeur du localStorage
const initialState = {
  darkMode: loadThemeFromLocalStorage(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;