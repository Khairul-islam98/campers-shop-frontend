import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { useAddproductMutation } from "@/redux/features/product/productApi";
import { toast } from "sonner";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_img_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const AddProduct = () => {
  const [addproduct] = useAddproductMutation();
  const { register, handleSubmit, reset } = useForm();
  const [open, setOpen] = useState(false);
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Loading...');
    const formData = new FormData();
    formData.append("image", data.image[0]);

    const res = await fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    });
    const imageData = await res.json();

    const productData = {
      name: data.name,
      price: data.price,
      description: data.description,
      image: imageData.data.url,
      category: data.category,
      rating: data.rating,
      stock: data.stock,
    };
    try{
        const res = await addproduct(productData).unwrap()
        console.log(res);
        if(res.success){
         toast.success(res?.message, { id: toastId, duration: 2000 }); 
         setOpen(false);
         reset();
        }
    }catch(err){
        toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className="bg-black mb-2 hover:bg-gray-600">
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Create Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Make changes to your product here.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input {...register("name")} id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input
              {...register("image")}
              id="image"
              type="file"
              accept="image/*"
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
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input {...register("price")} id="price" type="number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Input {...register("rating")} id="rating" type="number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
            Stock
            </Label>
            <Input {...register("stock")} id="stock" type="number" className="col-span-3" />
          </div>
          <DialogFooter>
            <Button type="submit">Add Product</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
