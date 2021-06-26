import React, { useState } from 'react';
import PrefaceTransmission from "../transmission/PrefaceTransmission";
import form from '../../data/form';
import TransmissionSteps from "../transmission/TransmissionSteps";



const TransmissionForm = () => {
    const[show_slide, setShow_slide]=useState(1);

    const addition = () =>{
        setShow_slide(prev =>{
            return(
                prev + 1
            )
        })
    };

    const subtraction = () =>{
        setShow_slide(prev =>{
            return(
                prev - 1
            );
        });
    };

    return(
        <section className="transmission_form">
            <PrefaceTransmission
                text={form.p[show_slide]}
            />
            <div className="container_form">
                <div className="box_number">
                    <h1>Krok {show_slide + 1}/4</h1>
                </div>
                <div className="box_component">
                    <TransmissionSteps
                        show_slide={show_slide}
                    />
                </div>
                <div className="box_buttons">
                    {(show_slide!=0 & show_slide!=3) ? <button onClick={subtraction}>Wstecz</button> : null}
                    {(show_slide!=3) ? <button onClick={addition}>Dalej</button> : null}
                </div>
            </div>
        </section>
    );
};
export default TransmissionForm;
