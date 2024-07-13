import { useState, useEffect } from "react";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import CardItems from "@/components/card/CardItems";
import Search from "./Search";
import Loader from "@/components/shared/Loader";

interface QueryParams {
  search?: string;
  price?: string;
  category?: string;
  sort?: string;
}

interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const Products = () => {
  const [queryParams, setQueryParams] = useState<QueryParams>({});
  const { data, refetch, isLoading } = useGetAllProductQuery(queryParams);

  useEffect(() => {
    refetch();
  }, [queryParams, refetch]);

  if (isLoading) return <Loader />

  return (
    <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
      <Search setQueryParams={setQueryParams} queryParams={queryParams} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-80">
        {data?.data?.map((product: IProduct) => (
          <CardItems key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
