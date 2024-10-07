"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css";
import footerLogo from "@/public/gammalTech-logos/footer-logo.png";
import { MenuIcon } from "lucide-react";
import { X } from "lucide-react";

const NavBarHome = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="py-5 bg-primary">
      <nav className="relative flex items-center justify-between h-16 container mx-auto px-4">
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
            <Link
              key={name}
              href={path}
              className="text-white hover:text-secondary text-[20px] font-normal"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center mr-4">
          <button
            onClick={toggleMenu}
            className="text-[#007676] focus:outline-none"
          >
            {isOpen ? <X size={32} color="white" /> : <MenuIcon size={32} color="white" />}
          </button>
        </div>

        <div className="hidden lg:flex items-center mr-4">
          <Link
            href="/views/auth/signup"
            className="bg-[#007676] text-white rounded-full w-[156px] h-[50px] flex items-center justify-center text-base font-bold transition-all duration-300 ease-in-out hover:bg-[#005555] hover:shadow-lg"
          >
            GET STARTED
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col items-center bg-primary py-3 space-y-3">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className="text-white text-lg font-normal hover:bg-secondary transition duration-200 p-3 rounded-lg mx-5"
                onClick={() => setIsOpen(false)} // Close the menu when an item is clicked
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBarHome;
