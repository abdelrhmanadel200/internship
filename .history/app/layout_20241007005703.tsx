"use client";
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import LoggedInNavbar from '../components/Header/Navbar2'; 
import LoggedOutNavbar from '../components/Header/Navbar'; 
import Footer from '../components/Footer/Footer';

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('token'); 
        setIsLoggedIn(!!token);
    }, []);

    return (
        <html lang="en">
            <body className={inter.className}>
                <header>
                    {isLoggedIn ? <LoggedInNavbar /> : <LoggedOutNavbar />}
                </header>
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default Layout;
