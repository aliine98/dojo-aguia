'use client';
import { theme } from '@/mui-theme.config';
import { Container, Link, ThemeProvider, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component='footer' sx={{ textAlign: 'center', py: 2 }}>
                    <Typography variant='body1'>
                        Desenvolvido por
                        <Link component={NextLink} href='https://aliine98.github.io' sx={{ px: 1 }}>
                            Aline Bevilacqua
                        </Link>
                        &copy; 2024
                    </Typography>
                </Container>
            </ThemeProvider>
        </>
    );
}
