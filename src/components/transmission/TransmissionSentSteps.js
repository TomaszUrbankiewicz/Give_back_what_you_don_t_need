import React from 'react';
import LetteringWithDecoration from "../../components/global/LetteringWithDecoration"

const TransmissionSentStep = () => {
    return(
        <section className="send_step">
            <LetteringWithDecoration
                text="Dziekujemy za przesłanie formularza"
                text2="Na maila prześlemy wszelkie"
                text3="informacje o odbiorze"
            />
        </section>
    );
}
export default  TransmissionSentStep;