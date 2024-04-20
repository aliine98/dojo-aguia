import { theme } from '@/mui-theme.config';
import { Box, Container, CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

export default function AboutTeachers() {
    const teachers = [
        {
            name: 'Fernanda Silva',
            image: 'https://firebasestorage.googleapis.com/v0/b/dojo-aguia.appspot.com/o/galeria%2Ffernanda.jpg?alt=media&token=aa7544b0-6803-4e26-9043-8eeb6658f596',
            description:
                'Sensei Fernanda é uma instrutora dedicada e atenciosa, com foco no desenvolvimento individual de cada aluno. Ela é especialista em técnicas tradicionais de karatê e em treinamento de kihon.',
        },
        {
            name: 'Bruno Oliveira',
            image: 'https://firebasestorage.googleapis.com/v0/b/dojo-aguia.appspot.com/o/galeria%2Fbruno.jpg?alt=media&token=faf158e6-1cdf-477d-a223-a5d01c7f2ed0',
            description:
                'Sensei Bruno é um instrutor energético e motivador, com grande experiência em competições de karatê. Ele é especialista em treinamento físico e em preparar seus alunos para competições.',
        },
        {
            name: 'Akira Tanaka',
            image: 'https://firebasestorage.googleapis.com/v0/b/dojo-aguia.appspot.com/o/galeria%2Fakira.jpg?alt=media&token=b7687238-92c5-4ed4-af68-5e4c9516bf7c',
            description:
                'Sensei Akira é um instrutor energético e motivador, com grande experiência em competições de karatê. Ele é especialista em treinamento físico e em preparar seus alunos para competições.',
        },
    ];

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth='lg' sx={{ mt: 5, mb: 6 }}>
                    <Typography variant='h2' component='h1' sx={{ textAlign: 'center', mb: 5 }}>
                        Professores
                    </Typography>
                    <Box>
                        {teachers.map(({ name, image, description }, index) => (
                            <Grid container key={index} sx={{ justifyContent: 'center', alignItems: 'center', mb: 4 }}>
                                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Image src={image} alt={'Foto de ' + name} width={280} height={300} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='h3' component='h2'>
                                        {name}
                                    </Typography>
                                    <Typography variant='body1'>{description}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}
