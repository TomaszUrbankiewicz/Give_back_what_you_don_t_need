import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MenuHome from "../home/usedHome/MenuHome";
import LogInRegister from "../global/LogInRegister";
import LetteringWithDecoration from "../global/LetteringWithDecoration";
import {auth} from "../../firebaseConfig";

const HomeHeader = () => {
    const [user, setUser]= useState({email:"", logOK:false})

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user!=null) {
                const userEmail = user.email;
                setUser({email:userEmail, logOK:true})
            } 
        });
    },[])

    return(
        <header name="HomeHeader">
            <div className="header_foto"></div>
            <div className="header_menu_and_selection_buttons">
                <nav>
                    <LogInRegister/>
                    <MenuHome/>
                </nav>
                <section className="tip">
                    <LetteringWithDecoration 
                        text="Zacznij pomagać!" 
                        text2="Oddaj niechciane rzeczy w zaufane ręce"
                    />
                </section>
                <section className="box_button">
                    <Link to={(user.logOK) ? "/transmission" : "/login"} className="button">
                        <span>ODDAJ</span>
                        <span>RZECZY</span>
                    </Link>
                    <Link to={(user.logOK) ? "/transmission" : "/login"} className="button">
                        <span>ZORGANIZUJ</span>
                        <span>ZBIÓRKĘ</span>
                    </Link>
                </section>
            </div>
        </header>
    );
};
export default HomeHeader;
