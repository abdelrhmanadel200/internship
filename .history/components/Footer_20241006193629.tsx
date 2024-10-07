import React from 'react';
import Image from "next/image";
import footerLogo from "@/public/gammalTech-logos/footer-logo.png";
import { Inter } from "next/font/google";
import Link from 'next/link';
import { motion } from 'framer-motion';
import linkdin from "@/public/socialmediaIcons/linkdin.png";
import facebook from "@/public/socialmediaIcons/Facebook.png";
import instagram from "@/public/socialmediaIcons/Instagram.png";
import twitter from "@/public/socialmediaIcons/Twitter.png";

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
      <section className={`${inter.className} bg-teal-800 py-20  h-1/2`}>
        <div className="container mx-auto px-4 ">
          <div className="flex justify-around">
            <div>
              <div className="mb-6">
                <Image src={footerLogo} alt='Gammal Tech Logo' width={152} />
              </div>
              <div className="text-white w-80">
                We are an online educational platform that capitalizes on human potential by assisting professionals and aspiring individuals to succeed in their goals.
              </div>
            </div>

            <div className="text-white">
              <p className="font-semibold mb-5">1. Featured links</p>
              <div className="flex justify-between">
                <div className="space-y-2">
                  <p className='cursor-pointer'>Home</p>
                  <p className='cursor-pointer'>About</p>
                  <p className='cursor-pointer'>Pricing</p>
                </div>
                <div className="space-y-2">
                  <p className='cursor-pointer'>Contact</p>
                  <p className='cursor-pointer'>Terms</p>
                  <p className='cursor-pointer'>Privacy Policy</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-white font-semibold mb-8">2. Connect with us</p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/gammal.tech/?locale=ar_AR" passHref target='_blank'>
                  <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center cursor-pointer">
                    <Image src={facebook} alt='Facebook Logo' />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/gammal.tech/?hl=ar" passHref target='_blank'>
                  <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center cursor-pointer">
                    <Image src={instagram} alt='Instagram Logo' />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/company/gammal-tech/" passHref target='_blank'>
                  <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center cursor-pointer">
                    <Image src={linkdin} alt='LinkedIn Logo' />
                  </div>
                </Link>
                <Link href="https://x.com/gammaltech?lang=ar" passHref target='_blank'>
                  <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center cursor-pointer">
                    <Image src={twitter} alt='Twitter Logo' />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Footer;
