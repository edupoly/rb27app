// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/products' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/`,
    }),
    deleteProduct:builder.mutation({
      query:(id)=>{
        console.log(id)
        return {
          url: `/${id}`,
          method: 'DELETE'
        }
      }
    }),
    addProduct:builder.mutation({
      query:(newproduct)=>{
        return {
          url:"/",
          method:"POST",
          body:newproduct
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddProductMutation,useLazyGetAllProductsQuery,useGetAllProductsQuery,useDeleteProductMutation } = productsApi