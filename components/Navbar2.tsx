"use client";
import React, { useState, useRef, useEffect } from "react";
import GT_logo from "@/public/Component 6.png";
import notifications from "@/public/icon (1).png";
import message from "@/public/455.png";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import Avatar from "@/public/Avatar.png";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
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
  const menuRef = useRef<HTMLDivElement | null>(null); // Type the ref

  const handleOutsideClick = (event: MouseEvent) => { // Use MouseEvent
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) { // Type assertion
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
      <div className="main-nav">
        <nav className="relative">
          <ul className="flex justify-between items-center">
            <div className="logo-container">
              <Link href="/Home">
                <Image src={GT_logo} alt="Gammal Tech Logo" width={152} style={{ cursor: "pointer" }} />
              </Link>
            </div>
            <div className={`hidden md:flex space-x-10 ${inter.className}`}>
              <Link href="/" className="link">Home</Link>
              <Link href="/" className="link">Pricing</Link>
              <Link href="/" className="link">Contests</Link>
              <Link href="/" className="link">AI Challenge</Link>
              <Link href="/" className="link">Rank</Link>
              <Link href="https://www.gammal.tech/" className="link">About Us</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-[#007676] focus:outline-none">
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
            <div className="nav-info hidden md:flex items-center">
              <div className="vl"></div>
              <Image src={message} alt="Messages" width={25} height={64} className="mx-2" />
              <Image src={notifications} alt="Notifications" width={25} height={64} className="mx-2" />
              <Image src={Avatar} alt="Avatar" width={60} height={60} className="mx-2" />
            </div>
          </ul>

          {isOpen && (
            <div
              ref={menuRef}
              className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20 transition-transform transform origin-top-right scale-100 mx-4"
            >
              <div className="flex flex-col">
                <Link href="/" className="text-[#007676] text-lg font-semibold hover:bg-[#e0f7fa] transition duration-200 p-3 rounded-lg" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/" className="text-[#007676] text-lg font-semibold hover:bg-[#e0f7fa] transition duration-200 p-3 rounded-lg" onClick={() => setIsOpen(false)}>Pricing</Link>
                <Link href="/" className="text-[#007676] text-lg font-semibold hover:bg-[#e0f7fa] transition duration-200 p-3 rounded-lg" onClick={() => setIsOpen(false)}>Contests</Link>
                <Link href="/" className="text-[#007676] text-lg font-semibold hover:bg-[#e0f7fa] transition duration-200 p-3 rounded-lg" onClick={() => setIsOpen(false)}>AI Challenge</Link>
                <Link href="/" className="text-[#007676] text-lg font-semibold hover:bg-[#e0f7fa] transition duration-200 p-3 rounded-lg" onClick={() => setIsOpen(false)}>Rank</Link>
                <Link href="/" className="text-[#007676] text-lg font-semibold hover:bg-[#e0f7fa] transition duration-200 p-3 rounded-lg" onClick={() => setIsOpen(false)}>Profile</Link>
                <Link href="/" className="text-[#007676] text-lg font-semibold hover:bg-[#e0f7fa] transition duration-200 p-3 rounded-lg" onClick={() => setIsOpen(false)}>Notifications</Link>
                <Link href="/" className="text-[#007676] text-lg font-semibold hover:bg-[#e0f7fa] transition duration-200 p-3 rounded-lg" onClick={() => setIsOpen(false)}>Messages</Link>
                <Link href="https://www.gammal.tech/" className="text-[#007676] text-lg font-semibold hover:bg-[#e0f7fa] transition duration-200 p-3 rounded-lg" onClick={() => setIsOpen(false)}>About Us</Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </motion.div>
  );
};

export default NavBar;
