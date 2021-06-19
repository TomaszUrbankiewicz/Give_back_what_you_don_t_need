import React from 'react';
import TransmissionFirstStep from "./TransmissionFirstStep";
import TransmissionSecondStep from "./TransmissionSecondStep";
//import TransmissionThirdStep from ".TransmissionThirdStep";
//import TransmissionFourthtStep from ".TransmissionFourthtStep";

const TransmissionSteps = (props) => {

    if(props.show_slide==0)
    return(
        <TransmissionFirstStep/>
    );
    if(props.show_slide==1)
    return(
        <TransmissionSecondStep/>
    );
};
export default TransmissionSteps; 
