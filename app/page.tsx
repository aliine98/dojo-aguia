'use client';

import { theme } from '@/mui-theme.config';
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function Home() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
            </ThemeProvider>
        </>
    );
}
