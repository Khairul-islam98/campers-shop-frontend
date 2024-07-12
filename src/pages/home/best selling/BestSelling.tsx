import { Button } from '@/components/ui/button';
import { useGetAllProductQuery } from '@/redux/features/product/productApi';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BestSelling = () => {
    const [products, setProducts] = useState([])
    const {data} =  useGetAllProductQuery(products)
    return (
        <div className="max-w-screen-xl mx-auto mt-16 p-4 md:p-0">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Best Selling/Recommended Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.data?.slice(4,8).map((product) => (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
            </div>
          </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/products"
          >
            <Button>
            View More
            </Button>
          </Link>
        </div>
      </div>
    );
};

export default BestSelling;