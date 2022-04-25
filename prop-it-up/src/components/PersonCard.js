import React from 'react';
    
const Header = (props) => {
    const { firstName, lastName, age, hairColor } = props; 
    return (
        <div>
            <h1>
                { props.lastName }, { props.firstName } 
            </h1>
            <p>Age: { props.age } </p>
            <p>Age: { props.hairColor } </p>
        </div>
    );
}
export default Header;

