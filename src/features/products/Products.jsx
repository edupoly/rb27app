import React from 'react'
import { useDeleteProductMutation, useGetAllProductsQuery,useLazyGetAllProductsQuery } from '../../services/products'
import axios from 'axios'
function Products() {
    var {data,isLoading}=useGetAllProductsQuery()
    var [rfn]=useLazyGetAllProductsQuery()
    var [fn]=useDeleteProductMutation();

    function deleteProduct(id){
        fn(id).then((res)=>{
            alert("product deleted")
            rfn();
        })
    }

    // function deleteProduct(id){
    //     axios.delete(`http://localhost:4000/products/${id}`)
    //     .then(()=>{
    //         alert("delete ipai")
    //     })
    // }
  return (
    <div className='mybox'>
        <h1>Products</h1>
        {
            isLoading && <img src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif" alt="" />
        }
        {
            data && data.map((product)=>{
                return <li>
                    {product.title}
                    <button onClick={()=>{deleteProduct(product.id)}}>Delete</button>
                    </li>
            })
        }
    </div>
  )
}

export default Products