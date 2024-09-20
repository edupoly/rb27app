import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsByIdQuery, useUpdateProductMutation } from '../../services/products';
import { useFormik } from 'formik';
function EditProduct() {
    var {pid} = useParams();
    var {data,isLoading}=useGetProductDetailsByIdQuery(pid);
    var [ufn]=useUpdateProductMutation()
    var productForm = useFormik({
        initialValues:{title:''},
        onSubmit:(values)=>{
            ufn(values).then(()=>{
                alert("Updated")
            })
        }
    });
    React.useEffect(()=>{
        console.log(data)
        productForm.setValues(data)
    },[data])
    

  return (
    <div>

        <h1>Lets begin the show!!</h1>
        <form onSubmit={productForm.handleSubmit}>
            <input type="text" placeholder="title" value={productForm.values?.title} name="title" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input>
            <br />
            <input type="text" placeholder="price" value={productForm.values?.price} name="price" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input>
            <br />
            <input type="text" placeholder="description" value={productForm.values?.description} name="description" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input>
            <br />
            <input type="text" placeholder="category" value={productForm.values?.category} name="category" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input>
            <br />
            <input type="text" placeholder="image" value={productForm.values?.image} name="image" onChange={productForm.handleChange} onBlur={productForm.handleBlur}></input>
            <br />
            <button>Update Product</button>
        </form>
    </div>
  )
}

export default EditProduct