import { applyMiddleware } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/",
  }), 
  endpoints: (builder) => ({

    //Login
    login: builder.mutation({
      query: (user) => {
        return {
          url: "login/",
          method: "post",
          body: user,
          header: {
            "Content-Type": "application/json",
          },
        };
      },
    }),


    //next endpoint
    products: builder.query({
      query: () => {
        return {
          url: "list-products/",
          method: "GET"
          
          
        }
      }
    }),

    //next
  }),
});

export const {useLoginMutation,useProductsQuery}=postApi 
export default postApi;



