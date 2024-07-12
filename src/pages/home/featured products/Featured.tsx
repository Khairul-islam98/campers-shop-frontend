import { Button } from "@/components/ui/button";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import  { useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  const [products, setProducts] = useState([]);
  const { data } = useGetAllProductQuery(products);
  return (
    <div className="max-w-screen-xl mx-auto mt-16 p-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {data?.data?.slice(0, 3).map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-lg">
           <div className="image-container">
           <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full magnifier object-cover mb-4"
            />
           </div>
            <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.category}</p>
            <p className="text-gray-900 font-bold mb-4">Price: ${product.price}</p>
            <Link to={`/products-details/${product._id}`}>
              <Button>View Details</Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/products">
          <Button>View More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
