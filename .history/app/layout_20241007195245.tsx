
import { Inter, Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';
import LoggedInNavbar from '../components/Header/Navbar2'; 
import LoggedOutNavbar from '../components/Header/Navbar'; 
import Footer from '../components/Footer/Footer';

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ['100' ,'200' ,'300','400','500','600','700'] 
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('token'); 
        setIsLoggedIn(!!token);
    }, []);

    return (
        <html lang="en">
            <body className={inter.className}>
                <header className={inter.className}>
                    {isLoggedIn ? <LoggedInNavbar /> : <LoggedOutNavbar />}
                </header>
                <main  className={poppins.className}>{children}</main>
                <Footer/>
            </body>
        </html>
    );
};

export default Layout;
