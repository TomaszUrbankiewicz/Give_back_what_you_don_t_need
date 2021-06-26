import React, { useEffect, useState } from "react";

const Checkedbox=(props)=>{
    const [activated, seActivated]=useState(props.initial_value);

    const choose = (e) => {
        seActivated( (activated) ? false : true);
        props.change_state_checkbox(e.target.name, e.target.value)
    }

    // useEffect( () => {
    //     props.change_state_checkbox(props.name, activated)
    // },[activated])


    return(
        <label className="checkbox">
            <input type="checkbox" value={activated} name={props.name} onChange={choose}/>
            <span>
                <div className={(activated)? "accepted" : null}></div>
            </span> 
            <span id="text">
                {props.text}
            </span>
        </label>
    );
};
export default Checkedbox;
