'use client';
import { theme } from '@/mui-theme.config';
import { sendPasswordReset } from '@/services/login';
import { Button, Container, CssBaseline, FormGroup, TextField, ThemeProvider, Typography, FormControl, Card, CardContent, Grid } from '@mui/material';
import React, { useRef, useState } from 'react';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const inputRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth='lg'>
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Card sx={{ mt: 10 }}>
                            <CardContent>
                                <Typography variant='h3' component='h1' sx={{ mb: 2 }}>
                                    Recuperar senha:
                                </Typography>
                                <FormControl component='form' onSubmit={e => e.preventDefault()} sx={{ gap: 2 }}>
                                    <TextField
                                        type='email'
                                        variant='outlined'
                                        label='Email'
                                        ref={inputRef}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <Typography variant='body1' component='p'>
                                        Caso o email esteja correto, receberá um link para redefinir sua senha.
                                    </Typography>
                                    <Button
                                        onClick={async () => {
                                            await sendPasswordReset(email, inputRef);
                                            window.location.reload();
                                        }}
                                        size='large'
                                        variant='contained'
                                        sx={{ mt: 2 }}>
                                        Enviar
                                    </Button>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    );
}
