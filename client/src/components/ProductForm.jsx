import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) =>{

    let [title, setTitle] = useState("")
    let [price, setPrice] = useState(undefined)
    let [description, setDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        let productFormData = {title, price, description}
        console.log(productFormData)
        axios.post("http://localhost:8000/api/products/new", productFormData)
            .then((response) => {
                console.log("success")
                console.log(response)
                props.setFormSubmitted(!props.formSubmitted)
            })
            .catch((err) => {
                console.log("there was an error")
                console.log(err)
            })
    }

    return(
        <>
            <h2>Product Manager</h2>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={ (e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" onChange={ (e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" onChange={ (e) => setDescription(e.target.value)}/>
                </div>
                
                <input type="submit" value="Create"/>
            </form>
        </>
        
    );
}

export default ProductForm;