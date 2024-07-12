import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: ({ search, category, price, sort }) => {
        let queryString = `/product?`;
        if (search) queryString += `searchTerm=${search}&`;
        if (category) queryString += `category=${category}&`;
        if (price) queryString += `price=${price}&`;
        if (sort) queryString += `sort=${sort}`;
        return {
          method: "GET",
          url: queryString,
        };
      },
      providesTags: ["product"],
    }),
    addproduct: builder.mutation({
      query: (productInfo) => ({
        url: "/product",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["product"],
    }),
    getsingleproduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    updateproduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteproduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useAddproductMutation,
  useGetsingleproductQuery,
  useUpdateproductMutation,
  useDeleteproductMutation,
} = productApi;
