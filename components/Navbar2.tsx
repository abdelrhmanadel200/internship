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
          <div className={`hidden md:flex space-x-10 ${inter.className}`}>
            <Link href="/" className="link hover:text-[#005555] transition">Home</Link>
            <Link href="/" className="link hover:text-[#005555] transition">Pricing</Link>
            <Link href="/" className="link hover:text-[#005555] transition">Contests</Link>
            <Link href="/" className="link hover:text-[#005555] transition">AI Challenge</Link>
            <Link href="/" className="link hover:text-[#005555] transition">Rank</Link>
            <Link href="https://www.gammal.tech/" className="link hover:text-[#005555] transition">About Us</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#007676] focus:outline-none">
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
          <div className="nav-info hidden md:flex items-center space-x-4">
            <Image src={message} alt="Messages" width={25} height={25} />
            <Image src={notifications} alt="Notifications" width={25} height={25} />
            <Image src={Avatar} alt="Avatar" width={40} height={40} className="rounded-full" />
          </div>
        </nav>

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
