'use client';

import { theme } from '@/mui-theme.config';
import { Button, CssBaseline, FormControl, TextField, ThemeProvider, Typography } from '@mui/material';

export default function Home() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
            </ThemeProvider>
        </>
    );
}

