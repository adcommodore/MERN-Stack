import React, { useState } from 'react';
    
const Person = (props) => {
    const [ birthday, setBirthday] = useState(props.age);  
    const handleClick = () => {
        setBirthday(birthday + 1)
    }
    return (
        <div>
            <h1>
                { props.lastName }, { props.firstName } 
            </h1>
            <p>Age: { birthday } </p>
            <p>Hair Color: { props.hairColor } </p>
            <button onClick={ handleClick }>Birthday Button for { props.firstName }</button>
        </div>
    );
}
    
export default Person;

