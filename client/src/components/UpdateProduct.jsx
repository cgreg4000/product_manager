import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";

const UpdateProduct = () => {

    const { id } = useParams();

    let [productDetails, setProductDetails] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                console.log(response.data.product)
                setProductDetails(response.data.product)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const changeHandler = (e) => {
        setProductDetails({
            ...productDetails,
            [e.target.name]: e.target.value
        })
    }

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`, productDetails)
            .then((response) => {
                console.log("success")
                console.log(response)
            })
            .catch((err) => {
                console.log("there was an error")
                console.log(err)
            })
    }

    return (
        <>
            <h2>Product Manager</h2>
            <form action="" onSubmit={updateHandler}>
                <div>
                    <label htmlFor="">Title</label>
                    <input className='form-control mb-2' type="text" name="title" onChange={changeHandler} value={productDetails.title} />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input className='form-control mb-2' type="number" name="price" onChange={changeHandler} value={productDetails.price} />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input className='form-control mb-3' type="text" name="description" onChange={changeHandler} value={productDetails.description} />
                </div>
                <input className='btn btn-secondary' type="submit" value="Update" />
            </form>
        </>
    );
}

export default UpdateProduct;