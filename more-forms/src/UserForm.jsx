import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
    
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                    <br />
                        { 
                            firstName.length > 0 && firstName.length < 2 ?
                            <span>First Name must be at least 2 characters.</span>
                            : null
                        }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                    <br />
                        { 
                            lastName.length > 0 && lastName.length < 2 ?
                            <span>Last Name must be at least 2 characters.</span>
                            : null
                        }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                    <br />
                        { 
                            email.length > 0 && email.length < 5 ?
                            <span>Email must be at least 5 characters.</span>
                            : null
                        }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                    <br />
                        { 
                            email.length > 0 && email.length < 8 ?
                            <span>Email must be at least 8 characters.</span>
                            : null
                        }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                    <br />
                        { 
                            password !== confirmPassword ?
                            <span>Passwords must match.</span>
                            : null
                        }
                </div>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
    
export default UserForm;