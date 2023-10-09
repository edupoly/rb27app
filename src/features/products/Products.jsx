import React from 'react'
import { useGetAllProductsQuery } from '../../services/products'

function Products() {
    var {data,isLoading}=useGetAllProductsQuery()
  return (
    <div className='mybox'>
        <h1>Products</h1>
        {
            isLoading && <img src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif" alt="" />
        }
        {
            data && data.map((product)=>{
                return <li>{product.title}</li>
            })
        }
    </div>
  )
}

export default Products