import React, { useState } from 'react';

const ButtonListChage = (props) =>{

    const induction = (e) =>{
        props.change_sides(e)
    }

    return(
            <div id={props.button_number} onClick={induction} className={(props.active)?"buton_change_hover":"buton_change"} >
                <h1>{props.button_number}</h1>
            </div>
    );
};
export default ButtonListChage;
