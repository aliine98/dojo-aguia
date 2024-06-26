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
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { listAll, getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { theme } from '@/mui-theme.config';
import { getAuth } from 'firebase/auth';
import UploadPhotoButton from '../components/UploadPhotoButton';
import { deletePhoto } from '@/services/gallery';

export default function Galeria() {
    const [photos, setPhotos] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [open, setOpen] = useState(false);
    const [dialogImage, setDialogImage] = useState('');

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

    const openDialog = (e: React.MouseEvent<HTMLImageElement>) => {
        setDialogImage(e.currentTarget.src);
        setOpen(true);
    };

    const onCloseDialog = () => {
        setOpen(false);
    };

    const deleteImage = (url: string) => {
        deletePhoto(url).then(() => {
            setPhotos(photos.filter((image: string) => image !== url));
        });
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
                                      <Card sx={{ width: '232px', cursor: 'pointer', position: 'relative', overflow: 'initial' }}>
                                          {user && (
                                              <IconButton
                                                  sx={{
                                                      position: 'absolute',
                                                      top: '-16px',
                                                      right: '-12px',
                                                      backgroundColor: theme.palette.grey.A700,
                                                      ':hover': {
                                                          backgroundColor: theme.palette.error.main,
                                                      },
                                                  }}
                                                  onClick={() => deleteImage(foto)}
                                                  aria-label='Excluir foto'>
                                                  <DeleteIcon fontSize='inherit' />
                                              </IconButton>
                                          )}
                                          <CardContent>
                                              <Image
                                                  src={foto}
                                                  title='Foto da galeria'
                                                  alt='Foto da galeria'
                                                  width={200}
                                                  height={200}
                                                  style={{ objectFit: 'cover' }}
                                                  onClick={openDialog}
                                              />
                                          </CardContent>
                                      </Card>
                                  </Grid>
                              ))}
                    </Grid>
                    <Dialog open={open} onClose={onCloseDialog} maxWidth='lg'>
                        <DialogContent>
                            <img src={dialogImage} alt='Foto da galeria' style={{ objectFit: 'contain', width: '100%', maxWidth: '800px' }} />
                        </DialogContent>
                    </Dialog>
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
