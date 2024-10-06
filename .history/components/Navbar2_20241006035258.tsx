"use client";
import React, { useState, useRef, useEffect } from "react";
import GT_logo from "@/public/Component 6.png";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaEnvelope, FaBell, FaUserCircle } from "react-icons/fa";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const pageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <div className="main-nav bg-white">
        <nav className="relative flex justify-between items-center p-4">
          <Link href="/Home" className="logo-container">
            <Image src={GT_logo} alt="Gammal Tech Logo" width={152} />
          </Link>
          
          {/* Desktop Menu */}
          <div className={`hidden lg:flex space-x-10 ${inter.className}`}>
            <Link href="/" className="text-[20px] link hover:text-[#005555] transition">Home</Link>
            <Link href="/" className="text-[20px] link hover:text-[#005555] transition">Pricing</Link>
            <Link href="/" className="text-[20px] link hover:text-[#005555] transition">Contests</Link>
            <Link href="/" className="text-[20px] link hover:text-[#005555] transition">AI Challenge</Link>
            <Link href="/" className="text-[20px] link hover:text-[#005555] transition">Rank</Link>
            <Link href="https://www.gammal.tech/" className="text-[20px] link hover:text-[#005555] transition">About Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button onClick={toggleMenu} className="text-[#007676] focus:outline-none">
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Notification Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/messages">
              <FaEnvelope className="text-[#007676] text-2xl" />
            </Link>
            <Link href="/notifications">
              <FaBell className="text-[#007676] text-2xl" />
            </Link>
            <Link href="/profile">
              <FaUserCircle className="text-[#007676] text-2xl" />
            </Link>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20 transition-transform transform origin-top-right scale-100 mx-4"
          >
            <div className="flex flex-col">
              {["Home", "Pricing", "Contests", "AI Challenge", "Rank", "Profile", "Notifications", "Messages", "About Us"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="text-[#007676] text-lg font-semibold hover:bg-[#e0f7fa] transition duration-200 p-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NavBar;
