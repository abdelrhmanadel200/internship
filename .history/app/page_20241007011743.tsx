// app/home/page.tsx
import NavBar from '@/components/Header/Navbar2';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <main>
            <div>
                <div className='flex'>
                    <div className="border-4 border-black  mt-20 mb-20 rounded-full">
                        <div className='bg-primary py-4 px-8 rounded-full'>
                            <span>Begginer</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
