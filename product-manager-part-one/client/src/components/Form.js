import React, { useState } from  'react';
import axios from "axios";
    
const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const createProduct = (e) => {
        e.preventDefault();
    
        axios.post("http://localhost:8000/api/create", {
            title, 
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch((err) => {
            console.log(err);
        })
    };
    
    return(
        <div>
            <form onSubmit={ createProduct }>
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
                <button type="submit">Create</button>
            </form>
        </div>
    );
};
    
export default Form;