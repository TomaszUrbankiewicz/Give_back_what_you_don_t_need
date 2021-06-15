import React from 'react';

const Instructions = (props) => {
    return(
        <div className="instruction">
            <img src={props.src}></img>
            <h1>{props.text_header}</h1>
            <div className="border"></div>
            <p>{props.text}</p>
        </div>
    );
};
export default Instructions;
