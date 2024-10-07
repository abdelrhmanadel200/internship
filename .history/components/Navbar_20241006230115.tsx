"use client";
import React, { useState, useRef, useEffect } from "react";
import GT_logo from "@/public/gammalTech-logos/Component 6.png";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "@/styles/globals.css";
import footerLogo from "@/public/gammalTech-logos/footer-logo.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const NavBarHome = () => {
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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contests", path: "/contests" },
    { name: "AI Challenge", path: "/ai-challenge" },
    { name: "Rank", path: "/rank" },
    { name: "About Us", path: "/about" },
  ];

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
            {isOpen ? <FaTimes className="text-4xl text-white" /> : <FaBars className="text-4xl  text-white" />}
          </button>
        </div>


        <div className="hidden lg:flex items-center mr-4">
          <Link href="/views/auth/signup" className="bg-[#007676] text-white rounded-full w-[156px] h-[50px] flex items-center justify-center text-base font-bold transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg">
            GET STARTED
          </Link>
        </div>
      </nav>


      {isOpen && (
        <div className="flex">
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 bg-primary z-20 transition-transform transform origin-top-right scale-100 w-full"
        >
          <div className="flex flex-col lg:hidden items-center">
            {navItems.map(({ name, path }) => (
              
              <Link
                key={name}
                href={path}
                className=" text-white text-lg font-normal hover:bg-[#f0f0f0] transition duration-200 p-3 rounded-lg mx-5"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-full">
                {name}
                </div>
              </Link>
            ))}
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default NavBarHome;
