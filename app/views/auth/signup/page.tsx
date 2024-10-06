"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { CloseRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Signup: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("/api/auth/signup", { name, email, password });
      router.push("/");
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(
          err.response.data.message || "Error signing up. Please try again."
        );
      } else {
        setError("Error signing up. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div>
      <section className={poppins.className}>
        <div className="flex justify-center items-center min-h-screen bg-[#d3d3d3] p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h1 className="text-4xl font-bold text-center text-teal-600 mb-6">
              Sign Up
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  User Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full h-12 bg-gray-50 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  aria-label="User Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full h-12 bg-gray-50 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full h-12 bg-gray-50 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-label="Password"
                />
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                className={`w-full h-12 bg-teal-600 rounded-md text-white text-lg font-semibold hover:bg-teal-700 transition duration-200 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-gray-600">Already have an account? </span>
              <button
                className="text-teal-600 underline font-semibold"
                onClick={() => router.push("/views/auth/login")}
              >
                Click here
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Signup;
