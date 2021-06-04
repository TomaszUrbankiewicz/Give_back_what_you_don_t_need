import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    useHistory
} from 'react-router-dom';
import LetteringWithDecoration from "../LetteringWithDecoration";
import Instructions from "./Instructions";
import foto1 from "../../assets/Icon-1.svg";
import foto2 from "../../assets/Icon-2.svg";
import foto3 from "../../assets/Icon-3.svg";
import foto4 from "../../assets/Icon-4.svg";


const WhatIsGoingOn = () =>{
    return(
        <section name="WhatIsGoingOn" className="what_is_going_on">
            <LetteringWithDecoration 
                text2="Wystarczą 4 proste kroki"
            /> 
            <section className="instructions">
                <div className="instructions_box">
                    <Instructions
                        src={foto1}
                        text_header="Wybierz rzeczy"
                        text="ubrani, zabawki, sprzet i inne"
                    />
                    <Instructions
                        src={foto2}
                        text_header="Spakuj je"
                        text="skorzystaj z worków na śmieci"
                    />
                    <Instructions
                        src={foto3}
                        text_header="Zdecyduj komu chcesz pomóc"
                        text="wybierz zaufane miejsce"
                    />
                    <Instructions
                        src={foto4}
                        text_header="Zamów kuriera"
                        text="kurier przyjedzie w dogodnym terminie"
                    />
                </div>
            </section>
            <section className="box_button">
                    <Link to="/login" className="button">
                        <span>ODDAJ</span>
                        <span>RZECZY</span>
                    </Link>
                </section>
        </section>
    );
};
export default WhatIsGoingOn;
