import React, { useState } from 'react';
import LetteringWithDecoration from "../not_assigned/LetteringWithDecoration";

const HomeContakt = () => {
    const[inputvalue, setInputvalu]=useState({ inputName:"", inputEmail:"", inputMessange:"" });

    const change_value = (e) => {
        setInputvalu(pre => {return ({ ...pre,[e.target.name]:e.target.value})}); 
    };

    const send = () => {
        if(inputvalue.inputName==""||inputvalue.inputEmail==""||inputvalue.inputMessange==""){
            console.log("inputy są puste") 
        };
    };

    return(
        <section name="contakt" className="contakt">
            <div className="contakt_foto"></div>
            <div className="contakt_form">
                <LetteringWithDecoration
                    text2="Skontaktuj się z nami"
                />
                <div className="container_form">
                    <div className="form_name_email">
                        <div className="form_box_input">
                            <label>Wisz swoje imię</label>
                            <input type="text" value={inputvalue.inputName} onChange={change_value} name="inputName"></input>
                        </div>
                        <div className="form_box_input">
                            <label>Wisz swój email</label>
                            <input type="email" value={inputvalue.inputEmail} onChange={change_value} name="inputEmail"></input>
                        </div>
                    </div>
                    <div className="form_messange">
                        <label>Wpisz swoją wiadomość</label>
                        <textarea rows="5" value={inputvalue.inputMessange} onChange={change_value} name="inputMessange"></textarea>
                    </div>
                </div>
                <div className="box_form_button">
                    <button onClick={send}>Wyśli</button>
                </div>
            </div>
        </section>
    );
};
export default HomeContakt;
