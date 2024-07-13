import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddProduct from "@/components/modal/AddProduct";
import { useDeleteproductMutation, useGetAllProductQuery } from "@/redux/features/product/productApi";
import UpdateProduct from "@/components/modal/UpdateProduct";
import Swal from "sweetalert2";
import { toast } from "sonner";
import Loader from "@/components/shared/Loader";

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

const ProductManagement = () => {
  const { data, isLoading } = useGetAllProductQuery([]);
  const [deleteProduct] = useDeleteproductMutation();

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteProduct(id).unwrap();
        if (res?.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        } else {
          toast.error("Failed to delete product");
        }
      } catch (err) {
        toast.error("Failed to delete product");
      }
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-screen-xl mx-auto py-20 px-3">
      <div className="border border-gray-400 rounded-lg p-8">
        <AddProduct />
        <p className="flex justify-end font-semibold">
          Total products: {data?.data?.length}
        </p>
        <Table className="p-12">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item: IProduct) => (
              <TableRow key={item._id}>
                <TableCell>
                  <img
                    className="object-cover rounded-lg size-14"
                    src={item.image}
                    alt={item.name}
                  />
                </TableCell>
                <TableCell className="text-sm">{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell className="text-right space-x-2">
                  <UpdateProduct item={item} id={item._id} />
                  <Button
                    onClick={() => handleDelete(item._id)}
                    className="bg-[#CB1836] text-white hover:bg-gray-600"
                  >
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
  );
};

export default ProductManagement;
