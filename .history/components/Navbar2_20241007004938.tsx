"use client";
import React, { useState, useRef, useEffect } from "react";
import GT_logo from "@/public/gammalTech-logos/Component 6.png";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import { FaBars, FaTimes, FaEnvelope, FaBell, FaUserCircle } from "react-icons/fa";
import "@/styles/globals.css";
import {MenuIcon} from 'lucide-react';
import {X} from 'lucide-react';
import {MessageCircle} from 'lucide-react';
import footerLogo from "@/public/gammalTech-logos/footer-logo.png"
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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contests", path: "/contests" },
    { name: "AI Challenge", path: "/ai-challenge" },
    { name: "Rank", path: "/rank" },
    { name: "About Us", path: "/about" },
  ];

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
<div className={`py-5 ${inter.className} bg-primary`}>
      <nav className="relative flex items-center justify-between h-16 container mx-auto px-4" >
        <Link href="/" className="flex items-center">
          <Image
            src={footerLogo}
            alt="Gammal Tech Logo"
            width={152}
            className="cursor-pointer"
          />
        </Link>


        <div className="hidden lg:flex space-x-10 items-center">
          {navItems.map(({ name, path }) => (
            <Link key={name} href={path} className=" text-white hover:text-[#005555] text-[20px] font-normal">
              {name}
            </Link>
          ))}
        </div>


        <div className="flex lg:hidden items-center mr-4">
          <button onClick={toggleMenu} className="text-[#007676] focus:outline-none">
            {isOpen ? <X size={32} color="white" /> : <MenuIcon size={32} color="white" />}
            
            
          </button>
        </div>



          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/messages">
              <MessageCircle size={32} color="white" />
            </Link>
            <Link href="/notifications">
              <FaBell className="text-[#007676] text-2xl" />
            </Link>
            <Link href="/profile">
              <FaUserCircle className="text-[#007676] text-2xl" />
            </Link>
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
  );
};

export default NavBar;
