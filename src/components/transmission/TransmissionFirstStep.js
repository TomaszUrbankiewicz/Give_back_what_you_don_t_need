import React from 'react';
import  Checkbox from "../global/Checkbox"
import form from "../../data/form";

const TransmissionFirstStep = () => {
    return(
        <section className="first_step">
            <h1>Zaznacz co chcesz dodać: </h1>
            {form.list_checkbox.map((el,id) => {
                return(
                    <Checkbox 
                        text={el}
                    />
                )
            })}
        </section>
    );
};
export default TransmissionFirstStep;
