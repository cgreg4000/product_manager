import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const AllProducts = (props) => {

    let [productList, setProductList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                setProductList(response.data.products)
                console.log(response.data.products)
            })
            .catch(err => {
                console.log("here is an error")
                console.log(err)
            })
    }, [props.formSubmitted])

    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(response => {
                console.log(response)
                setProductList(productList.filter(productObject => productObject._id != _id))
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>All Products:</h1>
            {
                productList.map((productObject) => {
                    return (
                        <div className='mb-1' key={`${productObject._id}`}>
                            <Link className='link-color' to={`/${productObject._id}`}>{productObject.title} </Link>
                            <button className='btn btn-danger m-2' onClick={() => { deleteProduct(productObject._id) }} >Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts;