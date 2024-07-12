import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/order",
        method: "POST",
        body: orderInfo,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
