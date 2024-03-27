import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '380px',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Typography variant='h3' component='h1' sx={{ textAlign: 'center', fontStyle: 'italic' }}>
                    "O caminho do karatê, guiado pela águia"
                </Typography>
                <Image
                    src='/hero-background.jpg'
                    alt='Hero Image'
                    fill
                    priority
                    style={{ objectFit: 'cover', position: 'absolute', zIndex: -1, top: 0, filter: 'brightness(0.3)' }}
                />
            </Box>
        </>
    );
}
