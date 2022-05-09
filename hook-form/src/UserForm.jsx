import React, { useState } from  'react';
    
const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
    
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                    <input type="submit" value="Submit" />
            </form>
            <div>
                <p>Your Form Data</p>
                <p>First Name {firstName} </p>
                <p>Last Name {lastName} </p>
                <p>Email {email}</p>
                <p>Password {password}</p>
                <p>Confirm Password {password}</p>
            </div>
            <div>
              
            </div>
        

        </div>
    );
};
    
export default UserForm;