"use client";
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import LoggedInNavbar from '../components/Navbar2'; 
import LoggedOutNavbar from '../components/Navbar'; 

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
            </body>
        </html>
    );
};

export default Layout;
