
import React from 'react';
import Menu from "./Menu";
import LogInRegister from "./LogInRegister";
import LetteringWithDecoration from "../LetteringWithDecoration";


const HomeHeader=()=> {
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
                <div className="box_button">
                    <div className="button button1">
                        <span>ODDAJ</span>
                        <span>RZECZY</span>
                    </div>
                    <div className="button button2">
                        <span>ZORGANIZUJ</span>
                        <span>ZBIÓRKĘ</span>
                    </div>
                </div>
            </div>
            
        </header>
    );
}

    export default HomeHeader;
