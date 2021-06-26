import React from 'react';
import { useState } from 'react';

const TransmissionThirdStep = (props) => {
    const [clicked_button, setClicked_button]=useState(false);

    const change_button = () => {
        setClicked_button((clicked_button) ? false : true);
    }

    const change_value_city = (e) => {
        props.change_city(e.target.id)
        setClicked_button(false)
    }
    return(
        <section className="third_step">
            <div className="box_city">
                <h1>Lokalizacja:</h1>
                <div className="box_select">
                    <button type="text" onClick={change_button}>
                        {props.value_city}
                        <span>{(clicked_button) ? `>` : `<`}</span></button>
                    <div className={(clicked_button) ? "box_opcion" : "box_opcion_none"}>
                        <div className="button" onClick={change_value_city} id="Poznań">Poznan</div>
                        <div className="button" onClick={change_value_city} id="Kraków">Kraków</div>
                        <div className="button" onClick={change_value_city} id="Warszawa">Warszawa</div>
                        <div className="button" onClick={change_value_city} id="Łódz">Łódz</div>
                        <div className="button" onClick={change_value_city} id="Wrocław">Wrocław</div>
                    </div>
                </div>
            </div>
            <div className="box_who_to_help">
                <h1>Komu chcesz pomóc?</h1>
                <div className="box_button">
                    <button className="active no_active">dzieciom</button>
                    <button className="active no_active">samotnym matkom</button>
                    <button className="active no_active">bezdomnym</button>
                    <button className="active no_active">niepełnosprawnym</button>
                    <button className="active no_active">osobom starszym</button>
                </div>
            </div>
            <div className="box_city">
                <h1>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h1>
                <input type="text"></input>
            </div>
            
        </section>
    );
};
export default TransmissionThirdStep;
