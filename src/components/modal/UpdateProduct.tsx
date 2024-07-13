import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useUpdateproductMutation } from "@/redux/features/product/productApi";
import { toast } from "sonner";

const image_hosting_key = import.meta.env.VITE_img_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  stock: number;
}

interface UpdateProductProps {
  item: IProduct;
  id: string;
}

const UpdateProduct = ({ item, id }: UpdateProductProps) => {
  const [open, setOpen] = useState(false);
  const [updateproduct] = useUpdateproductMutation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading...");
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const res = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });
      const imageData = await res.json();

      const productData = {
        name: data.name,
        price: data.price,
        description: data.description,
        image: imageData?.data?.url,
        category: data.category,
        rating: data.rating,
        stock: data.stock,
      };

      const updateProductData = {
        id,
        data: productData,
      };

      console.log("Update Product Data:", updateProductData);

      const updateResponse = await updateproduct(updateProductData).unwrap();
      console.log("Update Response:", updateResponse);

      if (updateResponse?.success) {
        toast.success(updateResponse?.message, { id: toastId, duration: 2000 });
        setOpen(false);
        reset();
      } else {
        throw new Error(updateResponse?.message || "Failed to update product");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating product", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="mb-2 bg-[#CB1836] text-white hover:bg-gray-600"
        >
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            ></path>
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="hover:text-[#CB1836] font-semibold">
            Update Product
          </DialogTitle>
          <DialogDescription>
            Make changes to your product here.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              {...register("name")}
              id="name"
              defaultValue={item.name}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input
              {...register("image")}
              id="image"
              type="file"
              className="col-span-3 text-none"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              {...register("description")}
              id="description"
              defaultValue={item.description}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input
              {...register("category")}
              id="category"
              defaultValue={item.category}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              {...register("price")}
              id="price"
              type="number"
              defaultValue={item.price}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Input
              {...register("rating")}
              id="rating"
              type="number"
              defaultValue={item.rating}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Stock
            </Label>
            <Input
              {...register("stock")}
              id="stock"
              type="number"
              defaultValue={item.stock}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-[#CB1836] text-white hover:bg-gray-600"
            >
              Update Product
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
