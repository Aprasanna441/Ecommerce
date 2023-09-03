import { applyMiddleware } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "./localStorage";
let {access_token}=getToken()
console.log(access_token)
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


    //get all products
    products: builder.query({
      query: () => {
        return {
          url: "list-products/",
          method: "GET"
          
          
          
        }
      }
    }),
    //search
    searchProducts: builder.query({
      query: (str) => {
        return {
          url: "search-products/",
          method: "GET",
          params:{
            "query":str
          }
         
          
          
        }
      }
    }),

    //categorical product
    categoricalProducts: builder.query({
      query: (q) => {
        return {
          url: "category-products/",
          method: "GET",
          params:{
            "category":q
          }
          
          
        }
      }
    }),
    //query of category list
    categorylist: builder.query({
      query: () => {
        return {
          url: "list-categories/",
          method: "GET",
       
          
          
        }
      }
    }),
    //User info query

    userInfo: builder.query({
      query: () => {
        return {
          url: "user/",
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`,
        }
          
          
          
        }
      }
    }),
    //next

  }),
});

export const {useLoginMutation,useProductsQuery,useCategoricalProductsQuery,useCategorylistQuery,useSearchProductsQuery,useUserInfoQuery}=postApi 
export default postApi;



