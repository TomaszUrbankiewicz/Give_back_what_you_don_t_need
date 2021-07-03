import React from 'react';

const TransmissionFourthtStep = (props) => {

    const change_value = (e) => {
        props.change_form_value(e.target.name,e.target.value)
    }

    return(
        <section className="fourtht_step">
            <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
            <div className="box_form">
                <div className="box_address">
                    <h1>Adres odbioru:</h1>
                    <div className="box_inputs">
                        <div className="box_input">
                            <label>Ulica</label><input type="text" value={props.form_value.street} name="street" onChange={change_value}></input>
                        </div>
                        <div className="box_input">
                            <label>Miasto</label><input type="text" value={props.form_value.city} name="city" onChange={change_value}></input>
                        </div>
                        <div className="box_input">
                            <label>Kod<span>pocztowy</span></label><input type="text" value={props.form_value.postal_code} name="postal_code" onChange={change_value}></input>
                        </div>
                        <div className="box_input">
                            <label>Numer<span>telefonu</span></label><input type="text" value={props.form_value.phone_numbe} name="phone_numbe" onChange={change_value}></input>
                        </div>
                    </div>
                </div>
                <div className="box_date">
                    <h1>Termin odbioru:</h1>
                    <div className="box_inputs">
                        <div className="box_input">
                            <label>Data</label><input type="text" value={props.form_value.date} name="date" onChange={change_value}></input>
                        </div>
                        <div className="box_input">
                            <label>Godzina</label><input type="text" value={props.form_value.time} name="time" onChange={change_value}></input>
                        </div>
                        <div className="box_input_big">
                            <label>Uwagi <span>dla kuriera</span></label><textarea cols="20" rows="4" value={props.form_value.comments} name="comments" onChange={change_value}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TransmissionFourthtStep;