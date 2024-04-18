'use client';
import { theme } from '@/mui-theme.config';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    CssBaseline,
    Grid,
    Pagination,
    Skeleton,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { app } from '@/services/firebase';
import { IStudent } from '@/model/Student';
import { getStudents } from '@/services/studentsDb';
import StudentCard from '../components/StudentCard';

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
                <Container sx={{ pb: 5 }} maxWidth='lg'>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 3, flexWrap: 'wrap' }}>
                        <Typography variant='h4' component='h1'>
                            Alunos
                        </Typography>
                        {Boolean(user) && (
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
                                              <Skeleton variant='rectangular' width={100} height={30} animation='wave' sx={{ mt: 2 }} />
                                          </CardContent>
                                      </Card>
                                  </Grid>
                              ))
                            : students.slice((currentPage - 1) * 10, currentPage * 10).map((student, index) => (
                                  <Grid item key={index} width={250}>
                                      <StudentCard student={student} />
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
