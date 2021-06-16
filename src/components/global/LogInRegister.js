import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {auth, firestore} from "../../firebaseConfig";
import {useHistory} from 'react-router-dom';

const LogInRegister = () => {
    const [user, setUser]= useState({email:"", logOK:false})
    const h=useHistory()

    const logOut = () => {
        auth.signOut().then(() => {
            h.push('/logOut')
        }).catch((error) => {
            console.log("błąd przy wylogowanu")
            console.log(error) 
        });
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user!=null) {
                const userEmail = user.email;
                setUser({email:userEmail, logOK:true})
            } 
            else {
                setUser({email:"", logOK:false})
            }
        });
    },[])

    if(user.logOK){
        return(
            <div className="log_in_register">
                <ul>
                    <li> Cześć {user.email }</li>
                    <Link to="/transmission">
                        <li>Oddaj rzecz</li>
                    </Link>
                    <li> <button onClick={logOut}>Wyloguj</button></li>
                </ul>
            </div>
        );
    }
    else{
        return(
            <div className="log_in_register">
                <ul>
                    <Link to="/login">
                        <li>Zaloguj</li>
                    </Link>
                    <Link to="/registration">
                        <li>Załóż konto</li>
                    </Link>
                </ul>
            </div>
        );
    }
};
export default LogInRegister;
