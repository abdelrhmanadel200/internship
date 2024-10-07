"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css";
import { MenuIcon, X, MessageCircle, Bell, UserCircle } from "lucide-react";
import footerLogo from "@/public/gammalTech-logos/footer-logo.png";

const NavBar = () => {
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

  const userMenuItems = [
    { name: "Messages", icon: <MessageCircle size={32} color="white" />, path: "/messages" },
    { name: "Notifications", icon: <Bell size={32} color="white" />, path: "/notifications" },
    { name: "Profile", icon: <UserCircle size={32} color="white" />, path: "/profile" },
  ];

  return (
    <div className="py-5 bg-primary w-full">
      <nav className="relative flex items-center justify-between h-16 container mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={footerLogo}
            alt="Gammal Tech Logo"
            width={152}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-10 items-center">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className="text-white hover:text-[#005555] text-[20px] font-normal"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center mr-4">
          <button onClick={toggleMenu} className="text-[#007676] focus:outline-none">
            {isOpen ? <X size={32} color="white" /> : <MenuIcon size={32} color="white" />}
          </button>
        </div>

        {/* User Icons (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-4">
          {userMenuItems.map(({ icon, path }) => (
            <Link key={path} href={path}>
              {icon}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-white shadow-lg rounded-lg z-20 transition-transform transform origin-top-right scale-100 mx-4">
          <div className="flex flex-col">
            {navItems.concat(userMenuItems.map(({ name }) => ({ name, path: "/" }))).map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-[#007676] text-lg font-semibold hover:bg-[#e0f7fa] transition duration-200 p-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
