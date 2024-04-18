'use client';
import isAuth from '@/app/components/isAuth';
import { IStudent } from '@/model/Student';
import { theme } from '@/mui-theme.config';
import { addStudent } from '@/services/studentsDb';
import { Button, Card, CardContent, Container, CssBaseline, Grid, MenuItem, TextField, ThemeProvider, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const AddStudent = () => {
    const [student, setStudent] = useState({} as IStudent);
    const router = useRouter();
    const [btnDisabled, setBtnDisabled] = useState(false);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth='lg'>
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Card sx={{ my: 10, width: '90%', maxWidth: '600px' }}>
                            <CardContent sx={{ display: 'grid', justifyContent: 'center', my: '30px' }}>
                                <Typography variant='h3' component='h1' sx={{ mb: 2 }}>
                                    Adicionar novo aluno:
                                </Typography>
                                <form onSubmit={e => e.preventDefault()} style={{ display: 'grid' }}>
                                    <Typography variant='body1'>Foto:</Typography>
                                    <TextField
                                        type='file'
                                        sx={{
                                            'input[type="file"]': {
                                                pl: '142px',
                                            },
                                            'input[type="file"]::file-selector-button': {
                                                color: theme.palette.primary.contrastText,
                                                backgroundColor: theme.palette.primary.main,
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                bottom: 0,
                                                border: 'none',
                                                borderRadius: '4px',
                                            },
                                        }}
                                        required
                                        onChange={e =>
                                            setStudent({
                                                ...student,
                                                photoFile: (e.target as HTMLInputElement).files![0],
                                                photoName: (e.target as HTMLInputElement).files![0].name,
                                            })
                                        }
                                    />
                                    <Typography variant='body1' sx={{ mt: 2 }}>
                                        Nome:
                                    </Typography>
                                    <TextField
                                        type='text'
                                        variant='outlined'
                                        onChange={e => setStudent({ ...student, name: e.target.value })}
                                        required
                                    />
                                    <Typography variant='body1' sx={{ mt: 2 }}>
                                        Faixa:
                                    </Typography>
                                    <TextField select value={student.belt} onChange={e => setStudent({ ...student, belt: e.target.value })} required>
                                        <MenuItem value=''>Selecione</MenuItem>
                                        <MenuItem value='Branca'>Branca</MenuItem>
                                        <MenuItem value='Laranja'>Laranja</MenuItem>
                                        <MenuItem value='Azul'>Azul</MenuItem>
                                        <MenuItem value='Amarela'>Amarela</MenuItem>
                                        <MenuItem value='Verde'>Verde</MenuItem>
                                        <MenuItem value='Marrom'>Marrom</MenuItem>
                                        <MenuItem value='Preta'>Preta</MenuItem>
                                    </TextField>
                                    <Button
                                        size='large'
                                        variant='contained'
                                        sx={{ mt: 2 }}
                                        disabled={btnDisabled}
                                        onClick={async () => {
                                            setBtnDisabled(true);
                                            await addStudent(student);
                                            router.refresh();
                                        }}>
                                        Adicionar
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default isAuth(AddStudent);
