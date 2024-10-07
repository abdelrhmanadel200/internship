import React from 'react';
import Image from "next/image";
import footerLogo from "@/public/gammalTech-logos/footer-logo.png";
import { Inter } from "next/font/google";
import linkdin from "@/public/linkdin.png";
import facebook from "@/public/Facebook.png";
import instagram from "@/public/Instagram.png";
import twitter from "@/public/Twitter.png";
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      <section className={`${inter.className} bg-teal-700 w-full py-20 px-24`}>
        <div className="flex justify-around">
          {/* Logo and description */}
          <div>
            <div>
              <Image src={footerLogo} alt='Gammal Tech Logo' width={152} />
            </div>
            <div className="text-white mt-8 w-80">
              We are an online educational platform that capitalizes on human potential by assisting professionals and aspiring individuals to succeed in their goals.
            </div>
          </div>

          {/* Featured Links */}
          <div>
            <p className="text-white font-semibold">1. Featured links</p>
            <div className="mt-5 flex justify-between">
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

          {/* Social Media Links */}
          <div>
            <p className="text-white font-semibold mb-8">2. Connect with us</p>
            <div className="flex space-x-5">
              <Link href="https://www.facebook.com/gammal.tech/?locale=ar_AR" passHref target='_blank'>
                <div className="bg-teal-800 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
                  <Image src={facebook} alt='Facebook' />
                </div>
              </Link>
              <Link href="https://www.instagram.com/gammal.tech/?hl=ar" passHref target='_blank'>
                <div className="bg-teal-800 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
                  <Image src={instagram} alt='Instagram' />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/company/gammal-tech/" passHref target='_blank'>
                <div className="bg-teal-800 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
                  <Image src={linkdin} alt='LinkedIn' />
                </div>
              </Link>
              <Link href="https://x.com/gammaltech?lang=ar" passHref target='_blank'>
                <div className="bg-teal-800 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
                  <Image src={twitter} alt='Twitter' />
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
