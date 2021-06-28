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

    const activation = (e) => {
        props.change_who_help(e.target.name)
    }

    const change_value_input = (e) => {
        props.setName_organization(e.target.value)
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
                    <button className={(props.who_help.children) ? "active" : "no_active" } onClick={activation} name="children">dzieciom</button>
                    <button className={(props.who_help.mothers) ? "active" : "no_active" } onClick={activation} name="mothers">samotnym matkom</button>
                    <button className={(props.who_help.homeless) ? "active" : "no_active" } onClick={activation} name="homeless">bezdomnym</button>
                    <button className={(props.who_help.disabled) ? "active" : "no_active" } onClick={activation} name="disabled">niepełnosprawnym</button>
                    <button className={(props.who_help.older) ? "active" : "no_active" } onClick={activation} name="older">osobom starszym</button>
                </div>
            </div>
            <div className="box_name_organization">
                <h1>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h1>
                <input type="text" name="name_organization" value={props.name_organization} onChange={change_value_input}></input>
            </div>
            
        </section>
    );
};
export default TransmissionThirdStep;
