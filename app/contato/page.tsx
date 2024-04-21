'use client';

import { theme } from '@/mui-theme.config';
import { Button, Card, CardContent, Container, CssBaseline, FormGroup, Grid, TextField, ThemeProvider, Typography } from '@mui/material';

export default function Contact() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth='lg' sx={{ my: 10 }}>
                    <Grid container spacing={3} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h3' component='h1' sx={{ mb: 2 }}>
                                Contate-nos
                            </Typography>
                            <Typography variant='body1' component='p'>
                                Caso tenha alguma dúvida ou queira solicitar orçamento para aulas particulares, entre em contato conosco preenchendo o
                                formulário.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ maxWidth: '600px', m: '0 auto' }}>
                                <CardContent sx={{ p: '40px' }}>
                                    <FormGroup>
                                        <Typography variant='subtitle1'>Nome:</Typography>
                                        <TextField type='text' variant='outlined' required sx={{ mb: 1 }} />
                                        <Typography variant='subtitle1'>Email:</Typography>
                                        <TextField type='email' variant='outlined' required sx={{ mb: 1 }} />
                                        <Typography variant='subtitle1'>Mensagem:</Typography>
                                        <TextField type='text' variant='outlined' required multiline rows={5} sx={{ mb: 1 }} />
                                        <Button variant='contained' type='submit'>
                                            Enviar
                                        </Button>
                                    </FormGroup>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    );
}
