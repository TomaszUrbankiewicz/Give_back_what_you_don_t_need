
import {
    BrowserRouter as Router,
    Route,
    Link,
    useHistory
  } from 'react-router-dom';

import React from 'react';
import Menu from "./Menu";
import LogInRegister from "./LogInRegister";
import LetteringWithDecoration from "../LetteringWithDecoration";



const HomeHeader=(context)=> {

    const history=useHistory()

    const transfer=()=>{
        history.push('/logowanie');
    };



    return (
        <header>
            <div className="header_foto"></div>
            <div className="header_menu_and_selection_buttons">
                <naw>
                    <LogInRegister/>
                    <Menu/>
                </naw>
                <section className="tip">
                    <LetteringWithDecoration text="Zacznij pomagać! " text2="Oddaj niechciane rzeczy w zaufane ręce"/>
                </section>
                <div onClick={transfer} className="box_button">
                    <div className="button button1">
                        <span>ODDAJ</span>
                        <span>RZECZY</span>
                    </div>
                    <div onClick={transfer} className="button button2">
                        <span>ZORGANIZUJ</span>
                        <span>ZBIÓRKĘ</span>
                    </div>
                </div>
            </div>
            
        </header>
    );
}

    export default HomeHeader;
