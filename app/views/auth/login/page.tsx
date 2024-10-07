"use client";

import React from "react";
import { Poppins } from "next/font/google";
import axios from "axios";
import Link from "next/link";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Login: React.FC = () => {
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data } = await axios.post("/api/auth/login", formData);
      localStorage.setItem("token", data.token);
      window.location.href = "/"; // Redirect using window.location
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(
          err.response.data.message || "Error logging in. Please try again."
        );
      } else {
        setError("Error logging in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = () => {
    window.location.href = "/views/auth/reset-password"; // Redirect using window.location
  };

  return (
    <section className={poppins.className}>
      <div className="flex items-center justify-center min-h-screen  p-4">
        <div className="bg-white rounded-lg  p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-black mb-6">
            LOGIN
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
              sx={{ backgroundColor: '#ff914c', '&:hover': { backgroundColor: '#e58e3c' } }}
            >
              {loading ? "Logging In..." : "Log In"}
            </Button>

            <div className="flex justify-center mt-4">
              <p className="text-sm text-teal-600 cursor-pointer" onClick={handleResetPassword}>
                Forgot Your Password?
              </p>
            </div>

            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          </form>

          <div className="mt-4 text-center">
            <span className="text-gray-600 text-[17px] font-normal">
              Don't have an account?{" "}
            </span>
            <Link href="/views/auth/signup" className="text-teal-600 underline font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
