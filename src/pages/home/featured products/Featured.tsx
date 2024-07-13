import { Button } from "@/components/ui/button";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { Link } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const Featured = () => {
  const { data } = useGetAllProductQuery([]);

  return (
    <div className="max-w-screen-xl mx-auto mt-16 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {data?.data?.slice(0, 3).map((product: Product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-lg" data-aos="flip-left">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full magnifier object-cover mb-4"
              />
            </div>
            <h3 className="text-2xl font-semibold hover:text-[#CB1836] mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4 hover:text-[#CB1836]">{product.category}</p>
            <p className="text-[#CB1836] mb-4">Price: ${product.price}</p>
            <Link to={`/products-details/${product._id}`}>
              <Button className="bg-[#CB1836] text-white hover:bg-gray-600">View Details</Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/products">
          <Button className="bg-[#CB1836] text-white hover:bg-gray-600">View More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
