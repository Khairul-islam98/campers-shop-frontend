import { Button } from "@/components/ui/button";
import { useGetsingleproductQuery } from "@/redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Rating from "react-rating";
import { Star } from "lucide-react";
import { addToCart } from "@/redux/features/cart/cart.slice";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, refetch } = useGetsingleproductQuery(id);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
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

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value);
  };

  // console.log(cart[0].stock);
  // const isOutOfStock = data?.data?.stock === 0;
  // const exceedsStock = existingCartProduct
  //   ? existingCartProduct.quantity + quantity > data?.data?.stock
  //   : quantity > data?.data?.stock;

  return (
    <div className="max-w-screen-xl mx-auto mt-16 p-4 md:p-0">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="image-container md:w-1/2">
          <img
            src={data?.data?.image}
            alt={data?.data?.name}
            className="rounded-lg magnifier shadow-lg object-cover w-full h-auto"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            {data?.data?.name}
          </h1>
          <div className="flex items-center text-gray-600 mb-4">
            Rating:{" "}
            <Rating
              emptySymbol={<Star size={20} color="black" />}
              fullSymbol={<Star size={20} color="black" fill="black" />}
              fractions={2}
              initialRating={data?.data?.rating}
              className="text-center items-center -mb-2"
              stop={5}
            />
          </div>
          <p className="text-gray-700 mb-4">{data?.data?.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 font-medium mr-2">Category:</span>
            <span className="text-gray-600">{data?.data?.category}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 font-medium mr-2">Price:</span>
            <span className="text-gray-700 font-semibold">
              ${data?.data?.price}
            </span>
          </div>
          <div className="flex items-center mb-4">
            {data?.data?.stock ? (
              <p className="flex gap-1 items-center text-gray-700 font-semibold">
                Stock: {data?.data?.stock}
              </p>
            ) : (
              <p className="text-gray-700 font-semibold flex gap-1 items-center">
                Out Of Stock
              </p>
            )}
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="quantity"
              className="text-gray-700 font-medium mr-2"
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
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
