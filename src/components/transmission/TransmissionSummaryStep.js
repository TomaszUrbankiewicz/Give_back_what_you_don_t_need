import React from 'react';
import foto1 from "../../assets/tshirt.svg";
import foto2 from "../../assets/refresh.svg"

const TransmissionSummaryStep = (props) => {
    return(
        <section className="transmission_summary_step">
            <h1>Podsumowanie twojego zamówienia</h1>
            <div className="box_detalis">
                <h1>Oddajesz:</h1>
                <div className="detalis">
                    <img src={foto1}/>
                    <h2>
                        {(props.state_checkbox.clothes_good) ? "ubrania, które nadają się do ponownego użycia, " : null}
                        {(props.state_checkbox.clothes_bad) ? "ubrania, do wyrzucenia, " : null}
                        {(props.state_checkbox.toys) ? "zabawki, " : null}
                        {(props.state_checkbox.books) ? "książki, " : null}
                        {(props.state_checkbox.others) ? "inne, " : null}
                        {(props.who_help.children) ? "dzieciom " : null}
                        {(props.who_help.mothers) ? "samotnym matkom " : null}
                        {(props.who_help.homeless) ? "bezdomnym " : null}
                        {(props.who_help.disabled) ? "niepełnosprawnym " : null}
                        {(props.who_help.older) ? "osobom sarszym " : null}
                        
                    </h2>
                </div>
                <div className="detalis">
                    <img src={foto2}/>
                    <h2>dla lokalizacji: {props.value_city}</h2>
                </div>
            </div>
            <div className="contact_details">
                <div className="box_address">
                    <h1>Adres odbioru:</h1>
                    <div className="box_information">
                        <div className="information">
                            <span>Ulica</span>
                            <span>{props.form_value.street}</span>
                        </div>
                        <div className="information">
                            <span>Miasto</span>
                            <span>{props.form_value.city}</span>
                        </div>
                        <div className="information">
                            <span>Kod<span>pocztowy</span></span>
                            <span>{props.form_value.postal_codet}</span>
                        </div>
                        <div className="information">
                            <span>Numer<span>telefonu</span></span>
                            <span>{props.form_value.phone_number}</span>
                        </div>
                    </div>
                </div>
                <div className="box_date">
                    <h1>Termin odbioru:</h1>
                    <div className="box_information">
                        <div className="information">
                            <span>Data</span>
                            <span>{props.form_value.date}</span>
                        </div>
                        <div className="information">
                            <span>Godzina</span>
                            <span>{props.form_value.time}</span>
                        </div>
                        <div className="information">
                            <span>Uwagi<span>dla kuriera</span></span>
                            <div className="comments">{props.form_value.comments}</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default TransmissionSummaryStep;
