import React from 'react';

const Mission = () => {
    return (
        <section className="py-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg mb-6">
          To provide high-quality outdoor products that inspire adventure and foster a love for nature.
        </p>
        <h2 className="text-3xl font-bold mb-4">Core Values</h2>
        <ul className="text-left max-w-lg mx-auto space-y-4">
          <li className="flex items-center">
            <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
              1
            </span>
            Sustainability: Commitment to eco-friendly practices and sustainable products.
          </li>
          <li className="flex items-center">
            <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
              2
            </span>
            Adventure: Encouraging exploration and discovery of the great outdoors.
          </li>
          <li className="flex items-center">
            <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
              3
            </span>
            Quality: Ensuring every product meets the highest standards of craftsmanship.
          </li>
          <li className="flex items-center">
            <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
              4
            </span>
            Community: Building a community of outdoor enthusiasts and supporting local initiatives.
          </li>
        </ul>
      </div>
    </section>
    );
};

export default Mission;