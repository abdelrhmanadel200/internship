"use client";

import React, { useState } from 'react';
import { Poppins } from "next/font/google";
import { CloseRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Signup: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post('/api/auth/signup', { name, email, password });
      router.push('/'); // Redirect to the home page after signup
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'Error signing up. Please try again.');
      } else {
        setError('Error signing up. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div>
      <section className={poppins.className}>
        <div className="flex justify-center items-center min-h-screen relative">
          <div className="bg-black/90 w-full max-w-6xl rounded-2xl min-h-[680px]">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="bg-teal-600 w-full h-96 rounded-tl-2xl rounded-br-[300px] flex items-center">
                <h1 className="text-4xl md:text-6xl ml-5">Welcome</h1>
              </div>
              <div className="flex flex-col items-center justify-center mt-10 md:mt-20">
                <p className="text-center mb-6 text-3xl md:text-4xl">Sign Up</p>
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    name="name" 
                    className="text-field w-80 md:w-96 text-lg p-3 mb-5 rounded-lg text-black" 
                    placeholder="User Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                    aria-label="User Name" 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    className="text-field w-80 md:w-96 text-lg p-3 mb-5 rounded-lg text-black" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    aria-label="Email" 
                  />
                  <input 
                    type="password" 
                    name="password" 
                    className="text-field w-80 md:w-96 text-lg p-3 mb-5 rounded-lg text-black" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    aria-label="Password" 
                  />
                  {error && <p className="text-red-500 mb-2">{error}</p>}
                  <button 
                    className={`w-80 md:w-96 bg-teal-600 text-white p-3 rounded-lg hover:opacity-90 font-semibold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    disabled={loading}
                  >
                    {loading ? 'Signing Up...' : 'Sign Up'}
                  </button>
                </form>
                <div className="flex items-center mt-4 w-full">
                  <hr className="flex-1 border-t border-gray-500" />
                  <p className="mx-3 text-lg">or</p>
                  <hr className="flex-1 border-t border-gray-500" />
                </div>
                <div className="text-center mt-6">
                  <p className="text-lg">Already have an account?{" "}
                    <span className="text-teal-600 cursor-pointer" onClick={() => router.push("/views/auth/login")}>click here</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-start md:hidden absolute top-5 right-5">
                <IconButton aria-label="close" onClick={() => {/* close function */}}>
                  <CloseRounded className="text-white" style={{ fontSize: "50px" }} />
                </IconButton>
              </div>
              <div className="hidden md:flex justify-end items-start">
                <IconButton aria-label="close" onClick={() => {/* close function */}} className="m-5">
                  <CloseRounded className="text-white" style={{ fontSize: "50px" }} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Signup;
