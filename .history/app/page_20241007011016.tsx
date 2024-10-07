// app/home/page.tsx
import NavBar from '@/components/Header/Navbar2';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <main>
            <div className="flex">
                <div>
                    <div className="progress-bar">
                        <div className='bg-primary mt-20'>
                            <span>Begginer</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
