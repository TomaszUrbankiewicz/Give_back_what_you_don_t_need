import React from 'react';
import TransmissionFirstStep from "./TransmissionFirstStep";
import TransmissionSecondStep from "./TransmissionSecondStep";
import TransmissionThirdStep from "./TransmissionThirdStep";
import TransmissionFourthtStep from "./TransmissionFourthtStep";
import TransmissionSummaryStep from "./TransmissionSummaryStep";
import TransmissionSentStep from "./TransmissionSentSteps";
import { useState } from 'react';

const TransmissionSteps = (props) => {
    const [value_ul, setValue_ul]=useState(" - wybierz - "); //STATE DO WYBORU LICZBY WORKÓW
    const [value_city,setValue_city]=useState(" - wybierz - ") //STATE DO WYBORU MIASTA
    const [state_checkbox, setState_checkbox]=useState({clothes_good:false,clothes_bad:false,toys:false,books:false,others:false}) // STATE CO CHCEMY ODDAĆ 
    const [who_help, setWho_help]=useState({children:false, mothers:false, homeless:false, disabled:false, older:false})//state komu pomagamy
    const [name_organization,setName_organization]=useState("")
    const [form_value, setForm_value]=useState({street:"",city:"",postal_code:"",phone_number:"",date:"",time:"",comments:""})

    const quantity_selection = (par) => {
        setValue_ul(par)
    };

    const change_city = (par) => {
        setValue_city(par)
    };

    const change_state_checkbox = (id, value) => {
        setState_checkbox((prev)=> {return({...prev, [id]:value})})
    };

    const change_who_help = (id) => {
        setWho_help((prev)=> {return({...prev, [id]:(who_help[id]) ? false : true})})
    };

    const change_form_value = (id, value) => {
        setForm_value((prev)=> {return({...prev, [id]:value})})
    };

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
            change_who_help={change_who_help}
            who_help={who_help}
            name_organization={name_organization}
            setName_organization={setName_organization}
        />
    );
    if(props.show_slide==3)
    return(
        <TransmissionFourthtStep
        change_form_value={change_form_value}
        form_value={form_value}
        />
    );
    if(props.show_slide==4)
    return(
        <TransmissionSummaryStep
        form_value={form_value}
        value_city={value_city}
        state_checkbox={state_checkbox}
        who_help={who_help}
        />
    );
    if(props.show_slide==5)
    return(
        < TransmissionSentStep/>
    );
};
export default TransmissionSteps; 
