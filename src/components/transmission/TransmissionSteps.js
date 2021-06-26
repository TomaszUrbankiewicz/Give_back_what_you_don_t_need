import React from 'react';
import TransmissionFirstStep from "./TransmissionFirstStep";
import TransmissionSecondStep from "./TransmissionSecondStep";
import TransmissionThirdStep from "./TransmissionThirdStep";
import TransmissionFourthtStep from "./TransmissionFourthtStep";
import { useState } from 'react';

const TransmissionSteps = (props) => {
    const [value_ul, setValue_ul]=useState(" - wybierz - ");
    const [value_city,setValue_city]=useState(" - wybierz - ")
    const [state_checkbox, setState_checkbox]=useState({clothes_good:false,clothes_bad:false,toys:false,books:false,others:false})

    const quantity_selection = (par) => {
        setValue_ul(par)
    }

    const change_city = (par) => {
        setValue_city(par)
    }

    const change_state_checkbox = (id, value) => {
        setState_checkbox((prev)=> {return({...prev, [id]:value})})
    }

    if(props.show_slide==0)
    return(
        <TransmissionFirstStep
            change_state_checkbox={change_state_checkbox}
            state_checkbox={state_checkbox}
        />
    );
    if(props.show_slide==1)
    return(
        <TransmissionSecondStep
            value_ul={value_ul}
            _quantity_selection={quantity_selection}
        />
    );
    if(props.show_slide==2)
    return(
        <TransmissionThirdStep
            value_city={value_city}
            change_city={change_city}
        />
    );
    if(props.show_slide==3)
    return(
        <TransmissionFourthtStep/>
    );
};
export default TransmissionSteps; 
