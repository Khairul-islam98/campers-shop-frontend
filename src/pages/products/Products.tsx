import React, { useState, useEffect } from "react";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import CardItems from "@/components/card/CardItems";
import Search from "./Search";

const Products = () => {
  const [queryParams, setQueryParams] = useState([]);
  const { data, refetch } = useGetAllProductQuery(queryParams);

  useEffect(() => {
    refetch();
  }, [queryParams, refetch]);

  return (
    <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
      <Search setQueryParams={setQueryParams} queryParams={queryParams} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-80">
        {data?.data?.map((product) => (
          <CardItems key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;