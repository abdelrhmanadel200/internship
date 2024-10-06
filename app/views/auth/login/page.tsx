"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";

import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data } = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      router.push("/");
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
    router.push("/views/auth/reset-password");
  };

  return (
    <motion.div>
      <section className={poppins.className}>
        <div className="flex items-center justify-center min-h-screen bg-[#d3d3d3] to-white p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h1 className="text-4xl font-bold text-center text-teal-600 mb-6">
              Log In
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full h-12 bg-gray-50 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full h-12 bg-gray-50 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div className="flex justify-between mt-4">
                <p className="text-sm">
                  <span
                    className="text-teal-600 cursor-pointer"
                    onClick={() => handleResetPassword()}
                  >
                    Forgot Your Password?
                  </span>
                </p>
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                className={`w-full h-12 bg-teal-600 rounded-md text-white text-lg font-semibold hover:bg-teal-700 transition duration-200 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Logging In..." : "Log In"}
              </button>
            </form>

            <div className="mt-4 text-center">
              <span className="text-gray-600">Dont have an account? </span>
              <button
                className="text-teal-600 underline font-semibold"
                onClick={() => router.push("/views/auth/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Login;
