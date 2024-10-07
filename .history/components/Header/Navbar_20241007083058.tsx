"use client"; // Add this line at the top
import Image from 'next/image'; 
import Link from 'next/link'; 
import { useState, useEffect } from 'react'; 
import { FiHome, FiInfo, FiDollarSign, FiUser, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import "@/styles/globals.css";
<<<<<<< HEAD:components/Header/Navbar.tsx
import footerLogo from "@/public/gammalTech-logos/footer-logo.png";
import {MenuIcon} from 'lucide-react';
import {X} from 'lucide-react';

=======
import GT_logo from "@/public/c186678f7cd589c185fff8baa189e685.png";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
>>>>>>> 197e556123912e996f0bcd58fa157ef5007fde0b:components/Navbar.tsx

  let timeoutId: string | number | NodeJS.Timeout | undefined; 

  const handleLinkClick = () => {
    setMobileMenuOpen(false); 
  };

  const handleMouseEnterDropdown = () => {
    clearTimeout(timeoutId);
    setDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    timeoutId = setTimeout(() => setDropdownOpen(false), 150); 
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId); 
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
<<<<<<< HEAD:components/Header/Navbar.tsx
    <div className={`py-5 ${inter.className} bg-primary`}>
      <nav className="relative flex items-center justify-between h-16 container mx-auto px-4" >
        <Link href="/" className="flex items-center">
          <Image
            src={footerLogo}
            alt="Gammal Tech Logo"
            width={152}
            className="cursor-pointer"
          />
=======
    <header className={`flex items-center justify-between shadow-md h-16 ${darkMode ? 'bg-gradient-to-r from-[#00454A] to-[#007C7E]' : 'bg-gradient-to-r from-teal-500 to-teal-700'}`}>
      <div className="flex-shrink-0">
        <Link href="/">
        < Image src={GT_logo} alt="Logo" className="ml-10 h-10" width={100} height={100} />
        </Link>
      </div>

      <button 
        className={`sm:hidden  ${darkMode ? 'text-white' : 'text-white'}  mr-5`} 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-expanded={mobileMenuOpen}
        aria-label="Toggle navigation"
      >
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-30 z-10" onClick={handleLinkClick} />
      )}

      <nav 
        className={`relative flex items-center ml-10 transition-all duration-200 ${mobileMenuOpen ? ' flex-col absolute top-16 left-0 w-full bg-teal-500 z-20 sm:static sm:flex-row' : 'hidden sm:flex'}`}
        role="navigation"
        
      >
        {/* Dark Mode Toggle */}
        <div className="flex items-center ml-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" checked={darkMode} onChange={toggleDarkMode} />
            <div className={`w-11 h-6 rounded-full shadow-inner ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
            <div className={`dot absolute w-5 h-5 rounded-full shadow transition-transform ${darkMode ? 'translate-x-full bg-gray-300' : 'translate-x-1 bg-white'}`}></div>
          </label>
        </div>

        <Link href="/" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-white hover:text-gray-200'} transition duration-200 mx-2 p-2 rounded-md`} onClick={handleLinkClick}>
          <FiHome className="mr-1" /> Home
>>>>>>> 197e556123912e996f0bcd58fa157ef5007fde0b:components/Navbar.tsx
        </Link>

        <Link href="https://www.gammal.tech/" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-white hover:text-gray-200'} transition duration-200 mx-2 p-2 rounded-md`} onClick={handleLinkClick}>
          <FiInfo className="mr-1" /> About
        </Link>

<<<<<<< HEAD:components/Header/Navbar.tsx
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
                
                {name}
              </Link>
            ))}
          </div>
        </div>
        </div>
      )}
    </div>
=======
        <Link href="/pricing" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-white hover:text-gray-200'} transition duration-200 mx-2 p-2 rounded-md`} onClick={handleLinkClick}>
          <FiDollarSign className="mr-1" /> Pricing
        </Link>

        <div 
          className="relative" 
          onMouseEnter={handleMouseEnterDropdown} 
          onMouseLeave={handleMouseLeaveDropdown}
        >
          <button className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-white hover:text-gray-200'} mx-2 p-2 rounded-md`}>
            <FiUser className="mr-1" /> User <FiChevronDown className="ml-1" />
          </button>
          {dropdownOpen && (
            <div className={`absolute right-0 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-black'} shadow-lg rounded-md mt-2`}>
              <Link href="/profile" className={`block px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`} onClick={handleLinkClick}>Profile</Link>
              <Link href="/certifcate" className={`block px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`} onClick={handleLinkClick}>Certificates</Link>
              <Link href="/logout" className={`block px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`} onClick={handleLinkClick}>Logout</Link>
            
            </div>
          )}
        </div>

        {/* Link to Login Page */}
        <Link href="/login" className="flex items-center" onClick={handleLinkClick}>
          <span 
            className={`${
              darkMode ? 'bg-[#003545] text-white hover:bg-[#071E3D]' : 'bg-[#FCE09B] text-black hover:bg-[#FFEEA9]'
            } px-4 py-2 flex items-center justify-center hover:shadow-lg transition duration-200 my-2 sm:my-0 sm:ml-6 mr-10 rounded-full`} 
            style={{ minWidth: '94px', minHeight: '43px', fontWeight: '600', fontSize: '16px' }}
          >
            <FiUser className="mr-1" /> Sign In
          </span>
        </Link>
        
      </nav>
    </header>
>>>>>>> 197e556123912e996f0bcd58fa157ef5007fde0b:components/Navbar.tsx
  );
};

export default Navbar;
