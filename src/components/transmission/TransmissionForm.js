import React, { useState } from 'react';
import PrefaceTransmission from "../transmission/PrefaceTransmission";
import form from '../../data/form';
import TransmissionSteps from "../transmission/TransmissionSteps";



const TransmissionForm = () => {
    const[show_slide, setShow_slide]=useState(0);

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
            {(show_slide!=4 & show_slide!=5) ? 
                <PrefaceTransmission
                    text={form.p[show_slide]}
                /> : null
            }
            
            <div className="container_form">
                <div className="box_number">
                    {(show_slide!=4 & show_slide!=5) ? <h1 >Krok {show_slide + 1}/4</h1> : null } 
                </div>
                <div className="box_component">
                    <TransmissionSteps
                        show_slide={show_slide}
                    />
                </div>
                <div className="box_buttons">
                    {(show_slide!=0 & show_slide!=5) ? <button onClick={subtraction}>Wstecz</button> : null}
                    {(show_slide!=4 & show_slide!=5) ? <button onClick={addition}>Dalej</button> : null}
                    {(show_slide==4) ? <button id="last" onClick={addition}>Potwierdzam</button> : null}
                </div>
            </div>
        </section>
    );
};
export default TransmissionForm;
