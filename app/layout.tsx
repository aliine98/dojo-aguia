import type { Metadata } from 'next';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export const metadata: Metadata = {
    title: 'Dojo Águia',
    description: 'Escola de karatê, Dojo Águia',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pt-br'>
            <body>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
