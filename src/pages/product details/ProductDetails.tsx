import { Button } from "@/components/ui/button";
import { useGetsingleproductQuery } from "@/redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { addToCart } from "@/redux/features/cart/cart.slice";
import { toast } from "sonner";
import { RootState } from "@/redux/store";
import { Rating } from '@smastrom/react-rating'
import Loader from "@/components/shared/Loader";
import ImageMagnifier from "@/components/shared/ImageMagnifier";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, refetch, isLoading } = useGetsingleproductQuery(id);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);
  const [quantity, setQuantity] = useState(1);

  const existingCartProduct = cart.find((product) => product._id === id);

  const handleAddToCart = async () => {
    const newQuantity = existingCartProduct
      ? existingCartProduct.quantity + quantity
      : quantity;

    if (data?.data?.stock < newQuantity) {
      toast.error("Not enough stock available");
      return;
    }
    try {
      refetch();
      const cartData = {
        ...data.data,
        quantity
      };

      dispatch(addToCart(cartData));
      toast.success("Product added to cart");
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value);
  };

  if (isLoading) return <Loader />

  return (
    <div className="max-w-screen-xl mx-auto mt-16 p-4 md:p-0">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="image-container md:w-1/2">
          <ImageMagnifier imageUrl={data?.data?.image} /> 
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 hover:text-[#CB1836]">
            {data?.data?.name}
          </h1>
          <div className="flex items-center text-gray-600 mb-4 hover:text-[#CB1836]">
          Rating:{" "}
            <Rating
              style={{ maxWidth: 100}}
              readOnly
              orientation="horizontal"
              value={data?.data?.rating}
            />
          </div>
          <p className="text-gray-700 mb-4 hover:text-[#CB1836]">{data?.data?.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 font-medium mr-2 hover:text-[#CB1836]">Category:</span>
            <span className="text-gray-600 hover:text-[#CB1836]">{data?.data?.category}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-[#CB1836] font-semibold mr-2">Price:</span>
            <span className="text-[#CB1836] font-semibold">
              ${data?.data?.price}
            </span>
          </div>
          <div className="flex items-center mb-4">
            {data?.data?.stock ? (
              <p className="flex gap-1 items-center text-gray-700 font-semibold hover:text-[#CB1836]">
                Stock: {data?.data?.stock}
              </p>
            ) : (
              <p className="text-[#CB1836] font-semibold flex gap-1 items-center">
                Out Of Stock
              </p>
            )}
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="quantity"
              className="text-gray-700 font-medium mr-2 hover:text-[#CB1836]"
            >
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 px-3 py-1 border border-gray-300 rounded-md"
              min="1"
            />
          </div>
          <Button
            onClick={handleAddToCart}
            disabled={data?.data?.stock === 0 }
            className="bg-[#CB1836] text-white hover:bg-gray-600"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
