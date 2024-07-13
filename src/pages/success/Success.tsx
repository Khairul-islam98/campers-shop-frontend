import { Button } from "@/components/ui/button";
import { clearCart } from "@/redux/features/cart/cart.slice";
import { useAppDispatch } from "@/redux/hook";
import { Link } from "react-router-dom";

const Success = () => {
    const dispatch = useAppDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }
  return (
    <div>
    <div className="bg-white border p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-bold text-black mb-4 hover:text-[#CB1836]">Order Confirmed!</h1>
      <p className="text-lg text-gray-700 mb-6 hover:text-[#CB1836]">Thank you for your order.</p>
      <div className="flex justify-center">
        <Link to="/">
          <Button onClick={handleClearCart} className="px-6 py-3 rounded-md bg-[#CB1836] text-white hover:bg-gray-600">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Success;
