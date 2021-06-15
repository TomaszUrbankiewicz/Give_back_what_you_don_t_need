import React, { useState } from 'react';
import LetteringWithDecoration from "../global/LetteringWithDecoration";

const HomeContakt = () => {
    const[inputvalue, setInputvalu]=useState({ inputName:"", inputEmail:"", inputMessange:"" });
    const[error_input, setError_input]=useState({name:true, email:true, messange:true});
    const[correct_sending, setCorrect_sending]=useState(false)

    const change_value = (e) => {
        setInputvalu(pre => {return ({ ...pre,[e.target.name]:e.target.value})}); 
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const send = () => {
        let error=false

        if(inputvalue.inputName=="" || inputvalue.inputName.includes(" ")){
            setError_input(prew =>{
                return( {...prew, name:false} );
            })
            error=true
        }
        else{
            setError_input(prew =>{
                return( {...prew, name:true} );
            })
        };

        if(inputvalue.inputEmail=="" || !validateEmail(inputvalue.inputEmail)){
            setError_input(prew =>{
                return( {...prew, email:false} );
            })
            error=true
        }
        else{
            setError_input(prew =>{
                return( {...prew, email:true} );
            })
        };

        if(inputvalue.inputMessange=="" || inputvalue.inputMessange.length<120){
            setError_input(prew =>{
                return( {...prew, messange:false} );
            })
            error=true
        }
        else{
            setError_input(prew =>{
                return( {...prew, messange:true} );
            })
        };

        if(!error){
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({name:inputvalue.inputName, email:inputvalue.inputEmail, message:inputvalue.inputMessange})
            })
            .then( response => response.json() )
            .then( resp => {
                console.info(resp)
                if(resp.status=="success"){
                    setCorrect_sending(true)
                    setInputvalu({ inputName:"", inputEmail:"", inputMessange:"" })
                }
            })
            .catch( resp => {
                console.error(resp)
            })     
        }
    };

    return(
        <section name="contakt" className="contakt">
            <div className="contakt_foto"></div>
            <div className="contakt_form">
                <LetteringWithDecoration
                    text2="Skontaktuj się z nami"
                />
                <div className={ (correct_sending) ? "success" : "defeat" }>
                    <span>Wiadomość została wysłana! Wkrótce się skontaktujemy.</span>
                </div>
                <div className="container_form">
                    <div className="form_name_email">
                        <div className={(error_input.name) ? "form_box_input" : "form_box_input form_box_input_name"}>
                            <label>Wisz swoje imię</label>
                            <input type="text" value={inputvalue.inputName} onChange={change_value} name="inputName"></input>
                        </div>
                        <div className={(error_input.email) ? "form_box_input" : "form_box_input form_box_input_email"}>
                            <label>Wisz swój email</label>
                            <input type="email" value={inputvalue.inputEmail} onChange={change_value} name="inputEmail"></input>
                        </div>
                    </div>
                    <div className={(error_input.messange) ? "form_box_messange" : "form_box_messange form_messange"}>
                        <label>Wpisz swoją wiadomość</label>
                        <textarea rows="5" value={inputvalue.inputMessange} onChange={change_value} name="inputMessange"></textarea>
                    </div>
                </div>
                <div className="box_form_button">
                    <button onClick={send}>Wyśli</button>
                </div>
            </div>
        </section>
    );
};
export default HomeContakt;
