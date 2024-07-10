import { Button } from '@/components/ui/button';
import React from 'react';
import img from '../../../assets/images/hero.png'


const HeroSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Campers Shop
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your one-stop shop for all camping essentials and outdoor gear.
          </p>
          <Button className="">
            Shop Now
          </Button>
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <img src={img} alt="Camping Gear" className=" w-96 object-cover rounded shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
