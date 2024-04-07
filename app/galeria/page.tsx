'use client';
import { app, storage } from '@/services/firebase';
import {
    Grid,
    Card,
    Skeleton,
    Pagination,
    Container,
    ThemeProvider,
    Typography,
    Box,
    CssBaseline,
    CardContent,
    Dialog,
    DialogContent,
} from '@mui/material';
import { listAll, getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { theme } from '@/mui-theme.config';
import { getAuth } from 'firebase/auth';
import UploadPhotoButton from '../components/UploadPhotoButton';

export default function Galeria() {
    const [photos, setPhotos] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const galleryRef = ref(storage, 'galeria');
        listAll(galleryRef).then(res => {
            res.items.map(item => getDownloadURL(item).then(url => setPhotos(prev => [...prev, url])));
            const total = Math.ceil(res.items.length / 20);
            setTotalPages(total);
        });
    }, []);

    const handleChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const openDialog = () => {
        setOpen(true);
    };

    const onCloseDialog = () => {
        setOpen(false);
    };

    const user = getAuth(app).currentUser;

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container sx={{ py: 2 }} maxWidth='lg'>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 3, flexWrap: 'wrap' }}>
                        <Typography variant='h4' component='h1'>
                            Galeria de Fotos
                        </Typography>
                        {user && <UploadPhotoButton />}
                    </Box>
                    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                        {photos.length === 0
                            ? [...Array(20)].map((_, index) => (
                                  <Grid item key={index} width={250}>
                                      <Card sx={{ width: '232px' }}>
                                          <CardContent>
                                              <Skeleton variant='rectangular' animation='wave' width={200} height={200} />
                                          </CardContent>
                                      </Card>
                                  </Grid>
                              ))
                            : photos.slice((currentPage - 1) * 20, currentPage * 20).map((foto, index) => (
                                  <Grid item key={index} width={250}>
                                      <Card
                                          sx={{ width: '232px', cursor: 'pointer' }}
                                          onClick={openDialog}
                                          aria-label='Abrir imagem'
                                          aria-controls={'foto-' + index}>
                                          <CardContent>
                                              <Image
                                                  src={foto}
                                                  title='Foto da galeria'
                                                  alt='Foto da galeria'
                                                  width={200}
                                                  height={200}
                                                  style={{ objectFit: 'cover' }}
                                              />
                                          </CardContent>
                                          <Dialog open={open} onClose={onCloseDialog} id={'foto-' + index} maxWidth='xl'>
                                              <DialogContent>
                                                  <img src={foto} alt='Foto da galeria' style={{ objectFit: 'contain', width: '100%' }} />
                                              </DialogContent>
                                          </Dialog>
                                      </Card>
                                  </Grid>
                              ))}
                    </Grid>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handleChangePage}
                        sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
                    />
                </Container>
            </ThemeProvider>
        </>
    );
}
