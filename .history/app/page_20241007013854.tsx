// app/home/page.tsx
import NavBar from '@/components/Header/Navbar2';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <main>
            <div>
                <div >
                    <div className="border-4 border-black  mt-20 mb-20 rounded-full w-48">
                        <div className='bg-secondary py-3 px-8 rounded-full w-1/3'>
                            <span className='text-xl ' style={{padding:"inherit"}}>Beginner</span>
                        </div>
                    </div>
                    <div className='bg-secondary rounded-full flex justify-center w-60 py-1 px-8'>
                            <span className='text-xl ' style={{padding:"inherit"}}>Finshed
30

out of
1000

</span>
                        </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
