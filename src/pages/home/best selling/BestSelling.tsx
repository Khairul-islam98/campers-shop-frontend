import Loader from '@/components/shared/Loader';
import { Button } from '@/components/ui/button';
import { useGetAllProductQuery } from '@/redux/features/product/productApi';
import { Link } from 'react-router-dom';


interface IProduct {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}
const BestSelling = () => {
    const {data, isLoading} =  useGetAllProductQuery([])
    if (isLoading) return <Loader />
    return (
        <div className="max-w-screen-xl mx-auto mt-16 p-4 md:p-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Best Selling/Recommended Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.data?.slice(4,8).map((product: IProduct) => (
            <div className="bg-white shadow-md rounded-lg overflow-hidden" data-aos="flip-left">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-[#CB1836]">Price: ${product.price}</p>
            </div>
          </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/products"
          >
            <Button className='bg-[#CB1836] text-white hover:bg-gray-600'>
            View More
            </Button>
          </Link>
        </div>
      </div>
    );
};

export default BestSelling;