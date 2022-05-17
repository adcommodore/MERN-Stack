import React, { useState } from  'react';
import axios from "axios";
    
const ProductForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const createProduct = (e) => {
        console.log("hello", e)

        e.preventDefault();
    
        axios.post("http://localhost:8000/api/create", {
            title, 
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setProducts([...products, res.data]);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch((err) => {
            console.log(err);
        })
    };
    
    return(
        <div style={{ textAlign: "center"}}>
            <h1>Product Manager</h1>
            <form onSubmit={createProduct}>
                <div>
                    <label>Title: </label> 
                    <input 
                        type="text" 
                        value= { title }
                        onChange={ (e) => setTitle(e.target.value) } 
                    />
                </div>
                <div>
                    <label>Price: </label> 
                    <input 
                        type="number" 
                        value= { price }
                        onChange={ (e) => setPrice(e.target.value) } 
                    />
                </div>
                <div>
                    <label>Description: </label> 
                    <input 
                        type="text" 
                        value = { description }
                        onChange={ (e) => setDescription(e.target.value) } 
                    />
                </div>
                <input type="submit" value="Create"/>
            </form>
        </div>
    );
};
    
export default ProductForm;
