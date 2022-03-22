import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AllProducts = (props) => {

    let [productList, setProductList] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(response => {
            setProductList(response.data.products)
            console.log(response.data.products)
        })
        .catch(err => {
            console.log("here is an error")
            console.log(err)
        })
    },[props.formSubmitted])

    return(
        <div>
            <h1>All Products:</h1>
            {
                productList.map( (productObject) => {
                    return(
                        <div key={`${productObject._id}`}>
                            <Link to={`/${productObject._id}`}>{productObject.title} </Link>
                        </div>
                        
                    )
                
                })
            }
            
        </div>
        
    )
}

export default AllProducts;