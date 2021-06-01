import React from 'react';
import foto from "../assets/Decoration.svg";

const LetteringWithDecoration = (props) =>{
    return(
        <div className="lettering_with_decoration">
            <h1>{props.text}</h1>
            <h1>{props.text2}</h1>
            <img src={foto} title="dekoracja"/>
        </div>
    );
};
export default LetteringWithDecoration; 
