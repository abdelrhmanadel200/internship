import React from 'react';
import Image from "next/image";
import footerLogo from "@/public/gammalTech-logos/footer-logo.png";
import linkdin from "@/public/socialmediaIcons/linkdin.png";
import facebook from "@/public/socialmediaIcons/Facebook.png";
import instagram from "@/public/socialmediaIcons/Instagram.png";
import twitter from "@/public/socialmediaIcons/Twitter.png";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const pageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const Footer = () => {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <section className={`${inter.className} bg-teal-700 w-full py-12 px-6 sm:py-16 sm:px-12 lg:px-24`}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-12">
          

          <div className="flex flex-col items-start">
            <Image src={footerLogo} alt="Gammal Tech Logo" width={152} />
            <p className="text-white mt-6 lg:mt-8 text-center lg:text-left w-full sm:w-80">
              We are an online educational platform that capitalizes on human potential by assisting professionals and aspiring individuals to succeed in their goals.
            </p>
          </div>


          <div className="flex flex-col items-start flex-wrap">
            <p className="text-white font-semibold">1. Featured links</p>
            <div className="mt-5 flex flex-col space-y-2 text-center lg:text-left">
              <div className="flex space-x-8">
                <div className="space-y-2">
                  <p className="text-white">Home</p>
                  <p className="text-white">About</p>
                  <p className="text-white">Pricing</p>
                </div>
                <div className="space-y-2">
                  <p className="text-white">Contact</p>
                  <p className="text-white">Terms</p>
                  <p className="text-white">Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-col items-start">
            <p className="text-white font-semibold mb-4 lg:mb-8">2. Connect with us</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/gammal.tech/?locale=ar_AR" passHref target="_blank">
                <div className="bg-teal-800 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer">
                  <Image src={facebook} alt="Facebook" />
                </div>
              </Link>
              <Link href="https://www.instagram.com/gammal.tech/?hl=ar" passHref target="_blank">
                <div className="bg-teal-800 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer">
                  <Image src={instagram} alt="Instagram" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/company/gammal-tech/" passHref target="_blank">
                <div className="bg-teal-800 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer">
                  <Image src={linkdin} alt="LinkedIn" />
                </div>
              </Link>
              <Link href="https://x.com/gammaltech?lang=ar" passHref target="_blank">
                <div className="bg-teal-800 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer">
                  <Image src={twitter} alt="Twitter" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Footer;
