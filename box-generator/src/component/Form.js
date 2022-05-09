import React, {useState} from 'react';

const Form = () => {
    const [newColor, setNewColor] = useState("");
    const [resColor, setResColor] = useState([]);

    const createColorBox = (e) => {
        e.preventDefault();

        setResColor( [ newColor, ...resColor] );
        
        return (
            <div
            style= {{
                height: "100px",
                width: "100px",
                backgroundColor: newColor
            }}
            >
            </div>
        );
    }
       
    return(
        <div>
            <form onSubmit={ createColorBox }>
                <div>
                    <label>Color</label>
                    <input type="text" onChange= { (e) => setNewColor(e.target.value) } />
                    <input type="submit" value="Add" />
                </div>
            </form>
            <div>
                { createColorBox }
            </div>
        </div>
    );

};
    

export default Form;