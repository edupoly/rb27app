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
    getProductDetailsById: builder.query({
      query: (id) => `/${id}`,
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
    }),
    updateProduct:builder.mutation({
      query:(product)=>{
        console.log("product",product)
        return {
          url:`/${product.id}`,
          method:"PUT",
          body:product
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUpdateProductMutation,useGetProductDetailsByIdQuery,useAddProductMutation,useLazyGetAllProductsQuery,useGetAllProductsQuery,useDeleteProductMutation } = productsApi