import React from 'react';
import { useState } from 'react';

const TransmissionSecondStep = (props) => {
    const [clicked_button, setClicked_button]=useState(false);

    const change_button = () => {
        setClicked_button((clicked_button) ? false : true);
    }

    const quantity_selection = (e) => {
        props._quantity_selection(e.target.id)
        setClicked_button(false)
    }

    return(
        <section className="second_step">
            <h1>Podaj liczbę 60L warków, w które spakowałeś/aś rzeczy:</h1>
            <div className="box_select">
                <h1>liczba 60L worków</h1>
                <button className={(props.value_ul==" - wybierz - ") ? "big" : "small"} onClick={change_button}>
                    {props.value_ul}
                    <span>{(clicked_button) ? '>' : `<`}</span>
                </button>
                <div className={(clicked_button) ? "buttons" : "buttons_none"}>
                    <div className="button" onClick={quantity_selection} id="1">1</div>
                    <div className="button" onClick={quantity_selection} id="2">2</div>
                    <div className="button" onClick={quantity_selection} id="3">3</div>
                    <div className="button" onClick={quantity_selection} id="4">4</div>
                    <div className="button" onClick={quantity_selection} id="5">5</div>
                </div>
            </div>
    </section>
    );
};
export default TransmissionSecondStep;