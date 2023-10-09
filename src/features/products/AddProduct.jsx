import { useFormik } from 'formik'
import React from 'react'
import { useAddProductMutation } from '../../services/products';

function AddProduct() {
    var [addFn]=useAddProductMutation()
    var productForm = useFormik({
        initialValues:{
            "title": "",
            "price": 0,
            "description": "",
            "category": "",
            "image": "",
            "rating": {
                "rate": 0,
                "count": 0
            }
        },
        onSubmit:(values)=>{
            addFn(values).then(()=>{alert("product added success")})
        }
    });
  return (
    <div className='mybox'>
        <h1>AddProduct</h1>
        <form onSubmit={productForm.handleSubmit}>
            <input type="text" placeholder="title" name="title" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input>
            <br />
            <input type="text" placeholder="price" name="price" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input>
            <br />
            <input type="text" placeholder="description" name="description" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input>
            <br />
            <input type="text" placeholder="category" name="category" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input>
            <br />
            <input type="text" placeholder="image" name="image" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input>
            <br />
            <button>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct