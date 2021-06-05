import React, { useState } from 'react';
import LetteringWithDecoration from "../LetteringWithDecoration";
import ListBox from "./ListBox";

const WhoWeHelp = () =>{
    const[viev, setViev]=useState(1) //state warunkowego renderowania

    const change = (e) =>{      // zdarzenie zmiany state viev
        if(e.target.id==1){
            setViev(1)
        };
        if(e.target.id==2){
            setViev(2)
        };
        if(e.target.id==3){
            setViev(3)
        };
    };

    return(
        <section name="who_we_help" className="who_we_help">
            <LetteringWithDecoration  
                text2="Komu pomagamy?"
            />
            <div className="box_button">
                <div id="1" onClick={change} className={(viev==1)?"button_hover":"button"}>Fundacjom</div>
                <div id="2" onClick={change} className={(viev==2)?"button_hover":"button"}>Organizacjom pozarzadowym</div>
                <div id="3" onClick={change} className={(viev==3)?"button_hover":"button"}>Lokalnym zbiurkom</div>
            </div>
            <ListBox viev={viev}/>
        </section>
    );
};
export default WhoWeHelp;
