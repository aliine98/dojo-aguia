import { theme } from '@/mui-theme.config';
import { Container, CssBaseline, List, ListItem, ThemeProvider, Typography, Link } from '@mui/material';
import React from 'react';

export default function AboutKarate() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth='lg' sx={{ my: 5 }}>
                    <Typography variant='h3' component='h1' sx={{ textAlign: 'center' }}>
                        História do Karate
                    </Typography>
                    <Typography variant='body1' component='p'>
                        Karate é uma arte marcial japonesa desenvolvida a partir da arte marcial indígena de Okinawa sob influência da arte da guerra
                        chinesa (chuan fa), das lutas tradicionais japonesas (koryu) e das disciplinas guerreiras japonesas (budō).
                    </Typography>
                    <Typography variant='body1' component='p'>
                        A influência chinesa foi maior inicialmente durante o desenvolvimento, variando em um paradigma primitivo de simples luta com
                        agarrões e projeções, para um modelo com mais ênfase em golpes traumáticos, e se fez sentir nas técnicas dos estilos mais
                        fluidos e pragmáticos da China meridional. Depois, devido a alterações geopolíticas, sobreveio a predominância das disciplinas
                        de combate do Japão e, nesse período, o modelo tendeu a simplificar ainda mais os movimentos, tornando-os mais diretos e
                        eliminando o que não seria útil ou que fosse apenas floreio.[4]
                    </Typography>
                    <Typography variant='body1' component='p'>
                        O repertório técnico da arte marcial abrange, principalmente, golpes contundentes nos pontos vitais (atemi waza), como:
                        pontapés, socos, joelhadas, bofetadas, etc., executadas com as mãos desarmadas. Todavia, técnicas de projeção, imobilização e
                        bloqueios — nage waza, katame waza, uke waza — também são ensinados, com maior ou menor ênfase, dependendo de qual estilo ou
                        escola se aprende a arte.
                    </Typography>
                    <Typography variant='h4' component='h2' sx={{ mt: 3, textAlign: 'center' }}>
                        No Brasil
                    </Typography>
                    <Typography variant='body1' component='p'>
                        Da mesma forma como sucedeu com outras artes marciais japonesas, o caratê foi introduzido no Brasil com a chegada de
                        imigrantes japoneses no começo do século XX. Mas somente no ano de 1956, o sensei Mitsuke Harada (Shotokan) instala o primeiro
                        dojô em São Paulo. A esse exemplo seguiram os mestres Juichi Sagara (Shotokan), em 1957; Seichi Akamine (Goju-ryu), em 1958;
                        Koji Takamatsu (Wado-ryu); Takeo Suzuki (Wado-ryu); Michizo Buyo (Wado-ryu); Yoshihide Shinzato (Shorin-ryu); Takeda, Kimura e
                        Fábio Sensei (Bushi Ryu), em 1992; Akio Yokoyama (Kenyu-ryu), em 1965. A prática da modalidade percebeu um aumento depois que
                        participantes de competições de artes marciais mistas lograram vitórias, como é o caso do carateca Lyoto Machida.
                    </Typography>
                    <Typography variant='h4' component='h2' sx={{ mt: 3, textAlign: 'center' }}>
                        Kyokushin
                    </Typography>
                    <Typography variant='body1' component='p'>
                        O estilo Karate Kyokushin foi criado no Japão, em 1957, pelo Grão-Mestre Masutatsu Oyama. Kyokushin significa “aprofundar-se
                        na verdade” e, hoje, é praticado em mais de 100 países ao redor do mundo. Na opinião do seu criador, os golpes deveriam ser
                        reais, pois só assim cada praticante saberia seu verdadeiro potencial. Oyama criou, então, uma nova forma de luta,
                        acrescentando de volta a intensidade de contato própria do Karaté, em realinhamento com as origens marciais do Karaté de Naha,
                        Okinawa, chamado Naha-te, do qual o estilo Kyokushin descende.
                    </Typography>
                    <Typography variant='body1' component='p'>
                        É um estilo de karaté dinâmico, baseado nos princípios do “bushido” (caminho do guerreiro), priorizando conceitos ancestrais
                        como ser rigoroso consigo mesmo, ser compreensivo com seus semelhantes, venerar seus pais e ser fiel à pátria.
                    </Typography>
                    <Typography variant='h4' component='h2' sx={{ mt: 3 }}>
                        Graduações
                    </Typography>
                    <List>
                        <ListItem>Branca - Mu Kyu</ListItem>
                        <ListItem>Laranja - 10º e 9º Kyu</ListItem>
                        <ListItem>Azul - 8º e 7º Kyu</ListItem>
                        <ListItem>Amarela - 6º e 5º Kyu</ListItem>
                        <ListItem>Verde - 4º e 3º Kyu</ListItem>
                        <ListItem>Marrom - 2º e 1º Kyu</ListItem>
                        <ListItem>Preta - 1º ao 10º "Dan"</ListItem>
                    </List>
                    <Typography variant='body2' component='p' sx={{ mt: 3 }}>
                        Fontes:
                    </Typography>
                    <Link href='https://pt.wikipedia.org/wiki/Caratê' sx={{ display: 'block' }} variant='body2' target='_blank'>
                        https://pt.wikipedia.org/wiki/Caratê
                    </Link>
                    <Link href='https://pt.wikipedia.org/wiki/Kyokushin' sx={{ display: 'block' }} variant='body2' target='_blank'>
                        https://pt.wikipedia.org/wiki/Kyokushin
                    </Link>
                </Container>
            </ThemeProvider>
        </>
    );
}
