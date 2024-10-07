'use client'
import React from 'react';
import { Poppins } from '@next/font/google';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const pricingPlans = [
  { plan: 'Economy', price: '50 EGP', attempts: '10 Attempts' },
  { plan: 'Gold', price: '150 EGP', attempts: '40 Attempts' },
  { plan: 'Premium', price: '299 EGP', attempts: '100 Attempts' },
];

const PricingCard = ({ plan, price, attempts }) => (
  <div className={`w-96 h-[450px] rounded-lg border-2 border-teal-700 bg-white flex flex-col items-center justify-evenly transition duration-300 ease-in-out hover:shadow-lg cursor-pointer ${poppins.className}`}>
    <div className="text-6xl text-teal-700">{plan}</div>
    <div className="text-5xl text-teal-700">{price}</div>
    <div className="text-3xl text-black">{attempts}</div>
    <button className="w-40 rounded-lg text-xl bg-teal-700 text-white py-2 transition duration-300 hover:bg-teal-600">
      Get it
    </button>
  </div>
);

const Pricing = () => {
  return (
      <section className="py-16 px-4">
        <div className={`text-center text-2xl md:text-4xl font-light mb-12 text-teal-700 ${poppins.className}`}>
          Choose the right plan for you
        </div>
        <div className="flex justify-evenly">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        <Footer />
      </section>
  );
};

export default Pricing;
