import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi";
import { useUpdateproductMutation } from "@/redux/features/product/productApi";
import { useAppSelector } from "@/redux/hook";
import { useState } from "react";

import { FieldValues, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const [createPayment] = useCreateOrderMutation();
  const cart = useAppSelector((state) => state.cart);
  const { register, handleSubmit, reset } = useForm();
  const [payment, setPayment] = useState("cash");
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0;
  const [updateproduct] = useUpdateproductMutation();
  const navigate = useNavigate();


  const onSubmit = async (data: FieldValues) => {
    const orderData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      deliveryAddress: data.deliveryAddress,
      totalPrice: totalPrice,
      status: "pending",
      productId: cart[0]._id,
    
    };
    try {
      const result = await createPayment(orderData).unwrap();
      console.log(result);
      const updateProductData = cart.map((item) => ({
        id: item._id, 
        quantity: item.quantity,
        stock: item.stock
      }));
      const updateResults = await Promise.all(
        updateProductData.map((item) => {
            const update = item.stock - item.quantity;
          return updateproduct({ id: item.id, data: {stock: update} }).unwrap();
        })
      );
      console.log("Update Results:", updateResults);

      if (result?.success && updateResults.every((res) => res?.success)) {
        toast.success("Order placed successfully!");
      }
      reset()
      navigate("/success")
    } catch (err) {
      toast.error("Error placing order");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md grid grid-cols-1 md:grid-cols-2 gap-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        <div className="form-group">
          <Label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </Label>
          <Input
            type="text"
            id="name"
            {...register("name")}
            className="form-input mt-1 block w-full"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </Label>
          <Input
            type="text"
            id="email"
            {...register("email")}
            className="form-input mt-1 block w-full"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <Label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </Label>
          <Input
            type="text"
            id="phone"
            {...register("phone")}
            className="form-input mt-1 block w-full"
            placeholder="Phone"
            required
          />
        </div>
        <div className="form-group">
          <Label
            htmlFor="deliveryAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Delivery Address
          </Label>
          <Input
            type="text"
            id="deliveryAddress"
            {...register("deliveryAddress")}
            className="form-input mt-1 block w-full"
            placeholder="Delivery Address"
            required
          />
        </div>

        <div className="mt-5">
          <Label>Payment Method</Label>
          <RadioGroup
            className="mt-4"
            defaultValue="cash"
            onValueChange={(value) => setPayment(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem  value="cash" />
              <Label htmlFor="cash">Cash on Delivery</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="stripe" />
              <Label htmlFor="stripe">Stripe Payment</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="text-center">
          {payment === "cash" ? (
            <Button  type="submit" className="mt-10 px-20 bg-[#CB1836] text-white hover:bg-gray-600">
              Place Order
            </Button>
          ) : (
            <Link to={"/stripe"}>
              <Button type="submit" className="mt-10 bg-[#CB1836] text-white hover:bg-gray-600">
                Place Order
              </Button>
            </Link>
          )}
        </div>
      </form>
      <div>
        <h2 className="text-xl font-bold mb-4 hover:text-[#CB1836]">Order Summary</h2>
        {cart?.map((item) => (
          <div key={item._id} className="flex justify-between mb-4">
            <div>
              <div className="flex gap-2">
                <img
                  className="object-cover rounded-md w-20 h-20 border-[#CB1836]"
                  src={item.image}
                  alt={item.name}
                />
                <p className="text-center flex items-center font-semibold hover:text-[#CB1836]">
                  {item.name.slice(0, 25)}...
                </p>
              </div>
            </div>
            <div className="text-[#CB1836]">Price: ${item.price}</div>
          </div>
        ))}
        <div className="flex justify-between font-bold text-lg">
          <div>Total</div>
          <div>$ {totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
