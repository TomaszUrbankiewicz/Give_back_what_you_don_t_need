import React from 'react';

const StatisticsComponent = (props) =>{
    return(
        <div className="box_statistics">
            <h1>{props.number}</h1>
            <span>{props.title}</span>
            <p>{props.text}</p>
        </div>
    );
};
export default StatisticsComponent; 
