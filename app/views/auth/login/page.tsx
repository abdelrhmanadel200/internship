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

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      router.push('/');
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'Error logging in. Please try again.');
      } else {
        setError('Error logging in. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div>
      <section className={poppins.className}>
        <div className="flex justify-center items-center h-screen relative">
          <div className="bg-black/90 w-full max-w-6xl rounded-2xl min-h-[680px]">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="bg-teal-600 w-full h-96 rounded-tl-2xl rounded-br-[300px] flex items-center">
                <h1 className="text-4xl md:text-6xl ml-5 leading-[1.25]">Welcome Back</h1>
              </div>
              <div className="flex flex-col items-center justify-center mt-10 md:mt-40">
                <p className="text-center mb-10 text-3xl md:text-4xl">Log In</p>
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
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
                    className="text-field w-80 md:w-96 text-lg p-3 rounded-lg text-black mb-1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-label="Password"
                  />
                  {error && <p className="text-red-500 mb-2">{error}</p>}
                  <div className='flex justify-start w-full mb-5'>
                    <p className="text-m">
                      Forget Your Password?{" "}
                      <span className="text-teal-600 cursor-pointer" onClick={() => {/* handle password reset */}}>Reset Here</span>
                    </p>
                  </div>
                  <button
                    className={`w-80 md:w-96 bg-teal-600 text-white p-3 rounded-lg hover:opacity-90 font-semibold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Logging In...' : 'Log In'}
                  </button>
                </form>
                <div className="flex items-center mt-4 w-full">
                  <hr className="flex-1 border-t border-gray-500" />
                  <p className="mx-3 text-lg">or</p>
                  <hr className="flex-1 border-t border-gray-500" />
                </div>
                <div className="text-center mt-6">
                  <p className="text-lg">Don&apos;t have an account?{" "}
                    <span className="text-teal-600 cursor-pointer" onClick={() => router.push("/views/auth/signup")}>Click here</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-start absolute top-5 right-5 md:static md:m-5">
                <IconButton aria-label="close" onClick={() => {/* close function */}}>
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

export default Login;
