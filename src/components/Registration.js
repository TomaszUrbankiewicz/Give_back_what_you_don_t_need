import React, { useEffect, useState } from 'react';
import LetteringWithDecoration from "./global/LetteringWithDecoration";
import Menu from "./global/Menu";
import LogInRegister from "./global/LogInRegister";
import {Link} from 'react-router-dom';
import {auth, firestore} from "../firebaseConfig";
import {useHistory} from 'react-router-dom';

const Registration = () => {
    const [input_value, setInput_value]=useState({email:"", password:"", password2:""});
    const [input_good, setImput_good]=useState({email:true, password:true, password2:true});
    const h=useHistory()

    const change_value = (e) => {
        setInput_value(pre => {return ({ ...pre,[e.target.name]:e.target.value})});
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const register = () => {
        let error=false

        if(!validateEmail(input_value.email)){
            setImput_good((prew) => { return(
                {...prew, email:false}
            )})
            error=true
        }
        if(input_value.password.length<6){
            setImput_good((prew) => { return(
                {...prew, password:false}
            )})
            error=true
        }
        if(input_value.password!=input_value.password2 || input_value.password2==""){
            setImput_good((prew) => { return(
                {...prew, password2:false}
            )})
            error=true
        }
        if(!error){


            auth.createUserWithEmailAndPassword(input_value.email, input_value.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    h.push('/login')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode )
                    console.log(errorMessage)
                });
        }
    };

    return(
        <section className="registration">
            <nav>
                <LogInRegister/>
                <Menu/>
            </nav>
            <div className="form_login">
                <LetteringWithDecoration
                    text2="Załóż konto"
                />
                <div className="box_input_login">
                    <div className={ (input_good.email) ? "box_input_email" : "box_input_email email_hover"}>
                        <label>Email</label>
                        <input onChange={change_value} name="email" value={input_value.email} type="email"/>
                    </div>
                    <div className={ (input_good.password) ? "box_input_password" : "box_input_password password_hover"}>
                        <label>Hasło</label>
                        <input onChange={change_value} name="password" value={input_value.password} type="password"/>
                    </div>
                    <div className={ (input_good.password2) ? "box_input_password_2" : "box_input_password_2 password_2_hover"}>
                        <label>Powtórz hasło</label>
                        <input onChange={change_value} name="password2" value={input_value.password2} type="password"/>
                    </div>
                </div>
                <div className="box_button">
                    <button onClick={register}>Załóż konto</button>
                    <button>
                        <Link to="/login">
                            Zaloguj się
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Registration;
