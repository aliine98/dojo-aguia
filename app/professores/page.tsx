import { theme } from '@/mui-theme.config';
import { Box, Container, CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

export default function AboutTeachers() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth='lg' sx={{ mt: 5, mb: 6 }}>
                    <Typography variant='h2' component='h1' sx={{ textAlign: 'center', mb: 5 }}>
                        Professores
                    </Typography>
                    <Box>
                        <Grid container sx={{ justifyContent: 'center', alignItems: 'center', mb: 4 }}>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Image
                                    src='https://firebasestorage.googleapis.com/v0/b/dojo-aguia.appspot.com/o/galeria%2Ffernanda.jpg?alt=media&token=aa7544b0-6803-4e26-9043-8eeb6658f596'
                                    alt='Fernanda'
                                    width={280}
                                    height={300}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant='h3' component='h2'>
                                    Fernanda Silva
                                </Typography>
                                <Typography variant='body1'>
                                    Sensei Fernanda é uma instrutora dedicada e atenciosa, com foco no desenvolvimento individual de cada aluno. Ela é
                                    especialista em técnicas tradicionais de karatê e em treinamento de kihon.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ justifyContent: 'center', alignItems: 'center', mb: 4 }}>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Image
                                    src='https://firebasestorage.googleapis.com/v0/b/dojo-aguia.appspot.com/o/galeria%2Fbruno.jpg?alt=media&token=faf158e6-1cdf-477d-a223-a5d01c7f2ed0'
                                    alt='Bruno'
                                    width={280}
                                    height={300}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant='h3' component='h2'>
                                    Bruno Oliveira
                                </Typography>
                                <Typography variant='body1'>
                                    Sensei Bruno é um instrutor energético e motivador, com grande experiência em competições de karatê. Ele é
                                    especialista em treinamento físico e em preparar seus alunos para competições.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Image
                                    src='https://firebasestorage.googleapis.com/v0/b/dojo-aguia.appspot.com/o/galeria%2Fakira.jpg?alt=media&token=b7687238-92c5-4ed4-af68-5e4c9516bf7c'
                                    alt='Akira'
                                    width={280}
                                    height={300}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant='h3' component='h2'>
                                    Akira Tanaka
                                </Typography>
                                <Typography variant='body1'>
                                    Sensei Akira é um instrutor energético e motivador, com grande experiência em competições de karatê. Ele é
                                    especialista em treinamento físico e em preparar seus alunos para competições.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}
