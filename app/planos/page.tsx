'use client';
import { theme } from '@/mui-theme.config';
import { ThemeProvider } from '@emotion/react';
import { ArrowRight } from '@mui/icons-material';
import { CssBaseline, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function Pricing() {
    const plans = [
        {
            name: 'Iniciante',
            price: 'R$ 120,00',
            features: [
                'Ideal para iniciantes de todas as idades',
                '2 aulas por semana',
                'Fundamentos do karatê: postura, técnicas básicas de golpes e defesas',
                'Desenvolvimento de habilidades motoras e coordenação',
                'Introdução aos valores do karatê: disciplina, respeito e autocontrole',
            ],
        },
        {
            name: 'Intermediário',
            price: 'R$ 200,00',
            features: [
                'Para alunos que desejam aprimorar suas habilidades e avançar para o próximo nível',
                '3 aulas por semana',
                'Aprofundamento nas técnicas de karatê: katas, combinações avançadas de golpes e defesas',
                'Ênfase na forma física e condicionamento',
                'Exploração dos princípios filosóficos do karatê: concentração, humildade e perseverança',
            ],
        },
        {
            name: 'Avançado',
            price: 'R$ 300,00',
            features: [
                'Para alunos dedicados que buscam a maestria no karatê',
                '4 aulas por semana',
                'Treinamento intensivo: aprimoramento das habilidades técnicas e físicas',
                'Preparação para competições e exames de graduação',
                'Mentoria com instrutores experientes',
                'Oportunidades de participar em eventos e seminários especializados',
            ],
        },
        {
            name: 'Personalizado individual',
            price: 'Entrar em contato para um orçamento',
            features: [
                'Aulas particulares',
                'Treinamento individualizado com foco em metas específicas',
                'Horários de aulas sob medida para se adequar à agenda do aluno',
            ],
        },
    ];

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth='lg'>
                    <Typography variant='h2' component='h1' sx={{ mt: 5, mb: 2, textAlign: 'center' }}>
                        Planos
                    </Typography>
                    <Grid container justifyContent='center' sx={{ mb: 5, gap: '20px' }}>
                        {plans.map(({ name, price, features }, i) => (
                            <Grid item key={i} width={320}>
                                <Card>
                                    <CardContent>
                                        <Typography variant='h4' component='h2' align='center'>
                                            {name}
                                        </Typography>
                                        <List>
                                            {features.map((feature, j) => (
                                                <ListItem key={j}>
                                                    <ListItemIcon>
                                                        <ArrowRight />
                                                    </ListItemIcon>
                                                    <ListItemText>{feature}</ListItemText>
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Typography variant='h4' component='h3' sx={{ mt: 2, color: theme.palette.primary.main }} align='center'>
                                            {price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    );
}
