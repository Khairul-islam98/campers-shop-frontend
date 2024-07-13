import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const CardItems = ({ product }: { product: IProduct }) => {
  return (
    <div className="lg:max-w-80 h-full rounded-lg border border-gray-200 p-4 flex flex-col gap-4">
      <div className="image-container">
        <img className="rounded-md magnifier w-full h-48 " src={product?.image} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-700 hover:text-[#CB1836] ">{product?.name}</h3>

          <div className="flex justify-between items-center">
            <h3 className=" font-semibold text-[#CB1836]">
              $ {product?.price} 
            </h3>
            <p className="text-sm text-gray-600 hover:text-[#CB1836]  flex items-center gap-1">
              
             Category: {product?.category}
            </p>
          </div>
        </div>

        <Link to={`/products-details/${product?._id}`}>
        <Button className="w-full bg-[#CB1836] text-white hover:bg-gray-600">
          See Details
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardItems;
