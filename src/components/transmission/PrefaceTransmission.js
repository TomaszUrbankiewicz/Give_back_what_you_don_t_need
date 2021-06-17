import React, { useState } from 'react';

const PrefaceTransmission = (props) => {
    return(
        <section className="preface_transmission">
            <div className="box_preface">
                <div className="box_text">
                    <h1>Ważne!</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </section>
    );
};
export default PrefaceTransmission;
