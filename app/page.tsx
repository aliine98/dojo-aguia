'use client';

import { theme } from '@/mui-theme.config';
import {
    Container,
    CssBaseline,
    Grid,
    List,
    ListItem,
    ListSubheader,
    ThemeProvider,
    Button,
    ImageList,
    ImageListItem,
    ListItemIcon,
    ListItemText,
    Skeleton,
    Paper,
    Typography,
} from '@mui/material';
import Hero from './components/Hero';
import Image from 'next/image';
import NextLink from 'next/link';
import { ArrowRight } from '@mui/icons-material';
import { getNewestPhotos } from '@/services/gallery';
import { useEffect, useState } from 'react';
import { getDownloadURL } from 'firebase/storage';

export default function Home() {
    const [photoList, setPhotoList] = useState<string[]>([]);
    useEffect(() => {
        getNewestPhotos().then(res => {
            res.items.forEach(item => {
                getDownloadURL(item).then(url => {
                    setPhotoList(prev => [...prev, url]);
                });
            });
        });
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Hero />
                <Container component='section' maxWidth='lg' sx={{ pb: 3 }}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: 'grid', justifyContent: 'center' }}>
                            <List dense={true}>
                                <ListSubheader sx={{ fontSize: '16px' }}>Benefícios do Karatê:</ListSubheader>
                                <ListItem sx={{ py: 0 }}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <ArrowRight />
                                    </ListItemIcon>
                                    <ListItemText>Melhora a forma física e a saúde geral</ListItemText>
                                </ListItem>
                                <ListItem sx={{ py: 0 }}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <ArrowRight />
                                    </ListItemIcon>
                                    <ListItemText>Desenvolve autodisciplina e confiança</ListItemText>
                                </ListItem>
                                <ListItem sx={{ py: 0 }}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <ArrowRight />
                                    </ListItemIcon>
                                    <ListItemText>Ensina técnicas de autodefesa eficazes</ListItemText>
                                </ListItem>
                                <ListItem sx={{ py: 0 }}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <ArrowRight />
                                    </ListItemIcon>
                                    <ListItemText>Promove o respeito e a humildade</ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{ display: 'grid', justifyContent: 'center' }}>
                            <List dense={true}>
                                <ListSubheader sx={{ fontSize: '16px' }}>Nosso Programa:</ListSubheader>
                                <ListItem sx={{ py: 0 }}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <ArrowRight />
                                    </ListItemIcon>
                                    <ListItemText>Aulas para iniciantes e avançados</ListItemText>
                                </ListItem>
                                <ListItem sx={{ py: 0 }}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <ArrowRight />
                                    </ListItemIcon>
                                    <ListItemText>Treinamento de competição</ListItemText>
                                </ListItem>
                                <ListItem sx={{ py: 0 }}>
                                    <ListItemIcon sx={{ minWidth: '30px' }}>
                                        <ArrowRight />
                                    </ListItemIcon>
                                    <ListItemText>Aulas particulares</ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ display: 'grid', placeItems: 'center' }}>
                            <ImageList cols={3} sx={{ mt: '8px' }}>
                                <ImageListItem key='Subheader' cols={3}>
                                    <ListSubheader component='span' sx={{ fontSize: '16px' }}>
                                        Últimas fotos:
                                    </ListSubheader>
                                </ImageListItem>
                                {photoList.length === 0 ? (
                                    <>
                                        <ImageListItem key='skeleton-1'>
                                            <Skeleton animation='wave' variant='rectangular' width='100px' height='100px' />
                                        </ImageListItem>
                                        <ImageListItem key='skeleton-2'>
                                            <Skeleton animation='wave' variant='rectangular' width='100px' height='100px' />
                                        </ImageListItem>
                                        <ImageListItem key='skeleton-3'>
                                            <Skeleton animation='wave' variant='rectangular' width='100px' height='100px' />
                                        </ImageListItem>
                                    </>
                                ) : (
                                    photoList.map((photo, index) => (
                                        <ImageListItem key={index}>
                                            <Image
                                                src={photo}
                                                alt={photo.replace(
                                                    'https://firebasestorage.googleapis.com/v0/b/dojo-aguia.appspot.com/o/galeria%2F',
                                                    ''
                                                )}
                                                width='100'
                                                height='100'
                                            />
                                        </ImageListItem>
                                    ))
                                )}
                            </ImageList>
                            <Button component={NextLink} href='/galeria' variant='contained' size='small'>
                                Veja mais
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                <Paper component='section' elevation={1} sx={{ width: '100%', mt: 5 }}>
                    <Container maxWidth='lg' sx={{ px: 3, py: 4, textAlign: 'center', justifyContent: 'center' }}>
                        <Typography variant='h6'>
                            A Dojo Águia é uma escola de karatê que oferece aulas para crianças, adolescentes e adultos. Nossa missão é proporcionar
                            aos nossos alunos um ambiente seguro e acolhedor para aprender karatê e desenvolver todo o seu potencial. Oferecemos
                            diferentes opções de planos para atender às necessidades de todos os alunos.
                        </Typography>
                        <Typography variant='h6' sx={{ mb: 3 }}>
                            Nossos instrutores são experientes e qualificados, e estão sempre buscando se aprimorar. A Dojo Águia é o lugar ideal para
                            você aprender karatê e melhorar sua forma física, mental e emocional.
                        </Typography>
                        <Button component={NextLink} variant='contained' href='/planos' size='large'>
                            Conheça os planos
                        </Button>
                    </Container>
                </Paper>
            </ThemeProvider>
        </>
    );
}
