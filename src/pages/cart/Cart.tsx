/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { decreaseQuantity,  increaseQuantity,  IProduct,  removeFromCart } from "@/redux/features/cart/cart.slice";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";

const Cart = () => {
  const navigate = useNavigate();
  
  const cart = useAppSelector((state) => state.cart);
  const { data, isLoading } = useGetAllProductQuery({});
  const dispatch = useAppDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );



  const handleDeleteItem = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  };




  const handleIncreaseQuantity = (id: string) => {
    const product = cart.find(item => item._id === id);
    const result = data?.data?.find((data: IProduct) => data._id === id); 
    if (product && product.quantity < result.stock) {
      dispatch(increaseQuantity(id));
    } else {
      toast.error("Not enough stock available");
    }
  };




  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };



  if (isLoading) {
    return <Loader />
  }

  const isCartEmpty = cart.length === 0;

  const handlePlaceOrder = () => {
    navigate("/checkout", { state: { totalPrice } });
  };

  return (
    <section className="max-w-7xl mx-auto py-20 min-h-[400px] px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="border border-gray-200 rounded-lg shadow-md p-6 bg-white">
            <div className="pb-4 border-b border-gray-200">
              <h2 className="text-2xl text-gray-800 font-semibold hover:text-[#CB1836]">
                Your Cart
              </h2>
              <p className="text-sm text-gray-600">
                Total products: {cart?.length}
              </p>
            </div>
            <div className="overflow-x-auto">
              <Table className="p-12 min-w-[600px]">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Product</TableHead>
                    <TableHead className="mx-auto items-center text-center">
                      Quantity
                    </TableHead>
                    <TableHead className="text-center">Total</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart?.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <div className="flex items-center space-x-4">
                          <img
                            className="object-cover rounded-md w-20 h-20"
                            src={item.image}
                            alt={item.name}
                          />
                          <div>
                            <h4 className="text-lg font-medium text-gray-800">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              ${item.price}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="">
                        <div className="flex items-center text-center justify-center mx-auto space-x-3">
                          <Button
                            onClick={() => handleDecreaseQuantity(item._id)}
                            disabled={item.quantity === 1}
                            variant="ghost"
                            className="border border-gray-300 p-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          </Button>
                          <span className="text-lg font-semibold text-gray-900">
                            {item.quantity}
                          </span>
                          <Button
                            onClick={() => handleIncreaseQuantity(item._id)}
                            
                            variant="ghost"
                            className="border border-gray-300 p-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <p className="text-lg font-semibold text-gray-900">
                          ${item.price * item.quantity}
                        </p>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button className="bg-[#CB1836] text-white hover:bg-gray-600" onClick={() => handleDeleteItem(item._id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-gray-200 rounded-lg shadow-md p-6 bg-white">
            <h2 className="text-2xl text-gray-900 font-semibold mb-4 hover:text-[#CB1836]">
              Summary
            </h2>
            <div className="flex justify-between text-lg font-medium text-gray-900">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
            <div className="mt-4"></div>
            <div className="mt-4 text-sm text-gray-600 hover:text-[#CB1836]">
              Tax included. Shipping calculated at checkout.
            </div>

            {isCartEmpty ? (
              <Button
                className="w-full bg-gray-300 text-gray-600 cursor-not-allowed mt-6"
                disabled
              >
                Place Order
              </Button>
            ) : (
              <Button
                onClick={handlePlaceOrder}
                className="w-full  mt-6 bg-[#CB1836] text-white hover:bg-gray-600"
              >
                Place Order
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
