'use client';

import { theme } from '@/mui-theme.config';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Hero from './components/Hero';

export default function Home() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Hero />
            </ThemeProvider>
        </>
    );
}
