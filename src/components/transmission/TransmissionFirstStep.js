import React from 'react';
import  Checkbox from "../global/Checkbox"
import form from "../../data/form";

const TransmissionFirstStep = (props) => {
    return(
        <section className="first_step">
            <h1>Zaznacz co chcesz dodać: </h1>
            {form.list_checkbox.map((el,id) => {
                return(
                    <Checkbox 
                        text={el.text}
                        name={el.name}
                        key={id}
                        change_state_checkbox={props.change_state_checkbox}
                        initial_value={props.state_checkbox[`${el.name}`]}
                    />
                )
            })}
        </section>
    );
};
export default TransmissionFirstStep;
