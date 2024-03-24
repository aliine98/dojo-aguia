'use client';
import { signIn } from '@/services/login';
import { FormControl, TextField, Button, Link } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '../../services/firebase';

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <FormControl component='form' onSubmit={e => e.preventDefault()}>
                <TextField
                    type='email'
                    label='Email'
                    size='small'
                    variant='standard'
                    sx={{ mb: 1, mt: 1 }}
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    type='password'
                    label='Senha'
                    size='small'
                    variant='standard'
                    sx={{ mb: 1 }}
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <Button variant='contained' size='small' sx={{ mb: 1 }} onClick={() => signIn(email, password, router)}>
                    Entrar
                </Button>
                <Link component={NextLink} href='/recuperar-senha' variant='body2'>
                    Esqueceu sua senha?
                </Link>
            </FormControl>
        </>
    );
}
