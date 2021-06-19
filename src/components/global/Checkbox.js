import React, { useState } from "react";

const Checkedbox=(props)=>{
    const [activated, seActivated]=useState(false);

    const choose = () => {
        seActivated( (activated)? false : true);
    }
    return(
        <label className="checkbox">
            <input type="checkbox" onChange={choose}/>
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
