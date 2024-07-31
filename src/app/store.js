import { configureStore } from '@reduxjs/toolkit';
import languageSwitchReducer from '../components/Header/LanguageSwitcher/languageSwitchSlice';

export const store = configureStore({
    reducer: {
        languageSwitch: languageSwitchReducer,
    },
});
