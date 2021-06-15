import React, { useState } from 'react';
import LetteringWithDecoration from "../components/global/LetteringWithDecoration";
import Menu from "../components/global/Menu";
import LogInRegister from "./global/LogInRegister";
import {Link} from 'react-router-dom';

const LoginComponent = () =>{
    const [input_value, setInput_value]=useState({email:"", password:""})
    const [input_email_ok, setImput_email_ok]=useState(true);
    const [input_password_ok, setImput_password_ok]=useState(true)

    const change_value = (e) => {
        setInput_value(pre => {return ({ ...pre,[e.target.name]:e.target.value})});
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const sing_in = () => {
        if(!validateEmail(input_value.email)){
            setImput_email_ok(false)
        }
        if(input_value.password.length<6){
            setImput_password_ok(false)
        }
    };

    return(
        <section className="login">
            <nav>
                <LogInRegister/>
                <Menu/>
            </nav>
            <div className="form_login">
                <LetteringWithDecoration
                    text2="Zaloguj się"
                />
                <div className="box_input_login">
                    <div className={ (input_email_ok) ? "box_input_email" : "box_input_email email_hover"}>
                        <label>Email</label>
                        <input onChange={change_value} name="email" value={input_value.email} type="email"/>
                    </div>
                    <div className={ (input_password_ok) ? "box_input_password" : "box_input_password password_hover"}>
                        <label>Hasło</label>
                        <input onChange={change_value} name="password" value={input_value.password}  type="password"/>
                    </div>
                </div>
                <div className="box_button">
                    <button>
                        <Link to="/registration">
                            Załóż konto
                        </Link>
                    </button>
                    <button onClick={sing_in} >Zaloguj się</button>
                </div>
            </div>
        </section>
    );
};
export default LoginComponent;
