import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';

const OneProduct = () => {

    const { id } = useParams();
    let [productDetails, setProductDetails] = useState({})
    const history = useHistory()

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

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${productDetails._id}`)
            .then(response => {
                console.log(response)
                history.push("/")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='mt-5'>
            <h3>{productDetails.title}</h3>
            <p className='mt-3'>Price: ${productDetails.price}</p>
            <p>Description: {productDetails.description}</p>
            <button className='btn btn-danger' onClick={deleteProduct} >Delete</button>
        </div>
    )
}

export default OneProduct;