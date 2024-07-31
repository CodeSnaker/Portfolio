import { createSlice } from '@reduxjs/toolkit';

const initialState = { language: 'fr' };

export const languageSwitchSlice = createSlice({
    name: 'languageSwitch',
    initialState,
    reducers: {
        toggle: (state) => {
            if (state.language === 'fr') {
                state.language = 'en';
            } else if (state.language === 'en') {
                state.language = 'fr';
            }
        },
        setFr: (state) => {
            state.language = 'fr';
        },
        setEn: (state) => {
            state.language = 'en';
        },
    },
});

export const { toggle, setFr, setEn } = languageSwitchSlice.actions;
export default languageSwitchSlice.reducer;
