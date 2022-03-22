import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";

const OneProduct = () => {

    const{id} = useParams();
    let [productDetails, setProductDetails] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            console.log(response.data.product)
            setProductDetails(response.data.product)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    

    return(
        <div className='mt-5'>
            <h3>{productDetails.title}</h3>
            <p className='mt-3'>Price: ${productDetails.price}</p>
            <p>Description: {productDetails.description}</p>
        </div>
        
    )
}

export default OneProduct;