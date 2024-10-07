'use client'
import React from 'react';

interface PricingCardProps {
    plan: string;
    price: string;
    attempts: string;
  }

const pricingPlans = [
  { plan: 'Economy', price: '50 EGP', attempts: '10 Attempts' },
  { plan: 'Gold', price: '150 EGP', attempts: '40 Attempts' },
  { plan: 'Premium', price: '299 EGP', attempts: '100 Attempts' },
];

const PricingCard = ({ plan, price, attempts }:PricingCardProps )=> (
  <div className={`w-96 h-[450px] rounded-lg border-2 border-[#006565] bg-white flex flex-col items-center justify-evenly transition duration-300 ease-in-out text-[#006565] hover:bg-primary  hover:text-white cursor-pointer md:max-lg:w-90 mb-10`}>
    <div className="text-6xl ">{plan}</div>
    <div className="text-5xl ">{price}</div>
    <div className="text-3xl text-red-500">{attempts}</div>
    <button className="w-40 rounded-lg text-xl bg-[#007676] text-white py-2 transition duration-300 hover:bg-teal-600">
      Get it
    </button>
  </div>
);

const Pricing = () => {
  return (
      <section className="container mx-auto px-4 py-16">
        <div className={`text-center text-5xl font-light mb-16 text-[#006565] font-medium md:max-sm:text-4xl `}>
          Choose the right plan for you
        </div>
        <div className="flex justify-between flex-wrap cards-container">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </section>
  );
};

export default Pricing;
