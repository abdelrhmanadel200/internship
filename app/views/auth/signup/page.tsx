"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import axios from "axios";
import Link from "next/link";
import { TextField, Button } from '@mui/material';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      // Send sign up request
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Redirect to registration page with email and password as query parameters
      window.location.href = `/views/auth/registration?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    } catch (error) {
      console.error(error.response?.data);
      setError("An error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={poppins.className}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg  p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-black mb-6">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <TextField
              label="User Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[342px]"
              InputLabelProps={{
                style: { color: '#094546' },
              }}
              InputProps={{
                style: {
                  borderRadius: '10px',
                  padding: '0 15px',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff914c',
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[342px]"
              InputLabelProps={{
                style: { color: '#094546' },
              }}
              InputProps={{
                style: {
                  borderRadius: '10px',
                  padding: '0 15px',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff914c',
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[342px]"
              InputLabelProps={{
                style: { color: '#094546' },
              }}
              InputProps={{
                style: {
                  borderRadius: '10px',
                  padding: '0 15px',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff914c',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={`w-[160px] h-[50px] rounded-[16px] text-white text-lg font-semibold ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
              sx={{ 
                backgroundColor: loading ? '#e58e3c' : '#ff914c', 
                '&:hover': { backgroundColor: '#e58e3c' } 
              }}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          </form>

          <div className="mt-4 text-center">
            <span className="text-gray-600 text-[17px] font-normal">
              Already have an account?{" "}
            </span>
            <Link href="/views/auth/login" className="text-teal-600 underline font-semibold">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
