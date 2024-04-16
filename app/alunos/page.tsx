'use client';
import { theme } from '@/mui-theme.config';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    CssBaseline,
    Divider,
    Grid,
    IconButton,
    Pagination,
    Skeleton,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import NextLink from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { app } from '@/services/firebase';
import { IStudent } from '@/model/Student';
import { getStudents } from '@/services/studentsDb';
import EditIcon from '@mui/icons-material/Edit';

export default function AlunosList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [students, setStudents] = useState<IStudent[]>([]);
    const user = getAuth(app).currentUser;

    const handleChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        getStudents().then(res => {
            setStudents(res);
            const total = Math.ceil(res.length / 10);
            setTotalPages(total);
        });
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container sx={{ py: 2 }} maxWidth='lg'>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 4, flexWrap: 'wrap' }}>
                        <Typography variant='h4' component='h1'>
                            Alunos
                        </Typography>
                        {user && (
                            <Button variant='contained' component={NextLink} href='/alunos/adicionar'>
                                Adicionar novo aluno
                            </Button>
                        )}
                    </Box>
                    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                        {students.length === 0
                            ? [...Array(10)].map((_, index) => (
                                  <Grid item key={index} width={250}>
                                      <Card sx={{ width: '232px' }}>
                                          <CardContent>
                                              <Skeleton variant='rectangular' animation='wave' width={200} height={200} />
                                              <Skeleton variant='text' animation='wave' />
                                              <Skeleton variant='text' animation='wave' />
                                          </CardContent>
                                      </Card>
                                  </Grid>
                              ))
                            : students.slice((currentPage - 1) * 10, currentPage * 10).map(({ name, belt, photoUrl, id }, index) => (
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
                                                  aria-label='Excluir foto'>
                                                  <DeleteIcon fontSize='inherit' />
                                              </IconButton>
                                          )}
                                          <CardContent>
                                              <Image
                                                  src={photoUrl}
                                                  title={'Foto de ' + name}
                                                  alt={'Foto de ' + name}
                                                  width={200}
                                                  height={200}
                                                  style={{ objectFit: 'cover' }}
                                              />
                                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                  <Typography variant='body1'>Nome: {name}</Typography>
                                                  <IconButton>
                                                      <EditIcon />
                                                  </IconButton>
                                              </Box>
                                              <Divider />
                                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                  <Typography variant='body1'>Faixa: {belt}</Typography>
                                                  <IconButton>
                                                      <EditIcon />
                                                  </IconButton>
                                              </Box>
                                          </CardContent>
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
