'use client';

import { createTheme } from '@mui/material';
import { Noto_Sans, Rokkitt } from 'next/font/google';

const noto = Noto_Sans({ subsets: ['latin'] });
const rokkitt = Rokkitt({ subsets: ['latin'] });

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            // main: '#e75f10',
            main: '#e4532f',
            contrastText: '#fdfdfd',
        },
    },
    typography: {
        fontFamily: noto.style.fontFamily,
        h1: {
            fontFamily: rokkitt.style.fontFamily,
        },
        h2: {
            fontFamily: rokkitt.style.fontFamily,
        },
        h3: {
            fontFamily: rokkitt.style.fontFamily,
        },
        h4: {
            fontFamily: rokkitt.style.fontFamily,
        },
    },
});
