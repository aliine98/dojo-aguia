'use client';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    FormControl,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Popover,
    TextField,
    ThemeProvider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { theme } from '@/mui-theme.config';
import Image from 'next/image';
import { ExpandMore } from '@mui/icons-material';

export default function NavBar() {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleDrawerToggle = () => {
        setMobileOpen(prevState => !prevState);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        {
            name: 'Sobre',
            options: [
                { name: 'Professores', path: '/professores' },
                { name: 'Karate', path: '/karate' },
            ],
        },
        { name: 'Planos', path: '/planos' },
        { name: 'Alunos', path: '/alunos' },
        { name: 'Galeria', path: '/galeria' },
        { name: 'Contato', path: '/contato' },
    ];

    const loginForm = (
        <FormControl component='form' onSubmit={e => (e.target as HTMLFormElement).preventDefault()}>
            <TextField type='email' label='Email' size='small' variant='standard' sx={{ mb: 1, mt: 1 }} required />
            <TextField type='password' label='Senha' size='small' variant='standard' sx={{ mb: 1 }} required />
            <Button type='submit' variant='contained' size='small' sx={{ mb: 1 }}>
                Entrar
            </Button>
            <Link href='/recuperar-senha' variant='body2'>
                Esqueceu sua senha?
            </Link>
        </FormControl>
    );

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            {loginForm}
            <Divider sx={{ mt: 1 }} />
            <List>
                {navItems.map(item => {
                    return item.options ? (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center', p: 0 }}>
                                <Accordion sx={{ background: 'none', boxShadow: 'none', width: '100%' }}>
                                    <AccordionSummary expandIcon={<ExpandMore />} sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={item.name} />
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: '#2c2b2b' }}>
                                        <List>
                                            {item.options.map(option => {
                                                return (
                                                    <ListItem key={option.name} disablePadding onClick={handleDrawerToggle}>
                                                        <ListItemButton LinkComponent={Link} href={option.path} sx={{ textAlign: 'center' }}>
                                                            <ListItemText primary={option.name} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                            </ListItemButton>
                        </ListItem>
                    ) : (
                        <ListItem key={item.name} disablePadding onClick={handleDrawerToggle}>
                            <ListItemButton LinkComponent={Link} href={item.path} sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar position='static'>
                    <Container
                        maxWidth='lg'
                        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1, pb: 1, md: { pt: 0 } }}>
                        <IconButton
                            size='large'
                            aria-label='Menu de navegação'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                            color='inherit'>
                            <MenuIcon />
                        </IconButton>
                        <Image src='/logo-4.1.png' alt='logo' width={96} height={96} />
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            {navItems.map(item => {
                                return item.options ? (
                                    <>
                                        <Button
                                            key={item.name}
                                            aria-owns={open ? 'nav-options-popover' : undefined}
                                            aria-controls={open ? 'nav-options-popover' : undefined}
                                            aria-haspopup='true'
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handlePopoverOpen}
                                            onMouseEnter={handlePopoverOpen}
                                            size='large'
                                            sx={{ color: '#fff' }}>
                                            {item.name}
                                        </Button>
                                        <Popover
                                            id='nav-options-popover'
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handlePopoverClose}
                                            onMouseLeave={handlePopoverClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            disableRestoreFocus>
                                            <List>
                                                {item.options!.map(option => (
                                                    <ListItem key={option.name} disablePadding>
                                                        <ListItemButton
                                                            LinkComponent={Link}
                                                            href={option.path}
                                                            sx={{ textAlign: 'center' }}
                                                            onClick={handlePopoverClose}>
                                                            <ListItemText primary={option.name} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Popover>
                                    </>
                                ) : (
                                    <Button size='large' LinkComponent={Link} href={item.path} key={item.name} sx={{ color: '#fff' }}>
                                        {item.name}
                                    </Button>
                                );
                            })}
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>{loginForm}</Box>
                    </Container>
                </AppBar>
                <nav>
                    <Drawer
                        variant='temporary'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                        }}>
                        {drawer}
                    </Drawer>
                </nav>
            </ThemeProvider>
        </>
    );
}
