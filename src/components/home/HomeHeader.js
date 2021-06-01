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

const HomeHeader = () =>{
    return(
        <header name="HomeHeader">
            <div className="header_foto"></div>
            <div className="header_menu_and_selection_buttons">
                <naw>
                    <LogInRegister/>
                    <Menu/>
                </naw>
                <section className="tip">
                    <LetteringWithDecoration 
                        text="Zacznij pomagać!" 
                        text2="Oddaj niechciane rzeczy w zaufane ręce"
                    />
                </section>
                <section className="box_button">
                    <Link to="/login" className="button">
                        <span>ODDAJ</span>
                        <span>RZECZY</span>
                    </Link>
                    <Link to="/login" className="button">
                        <span>ZORGANIZUJ</span>
                        <span>ZBIÓRKĘ</span>
                    </Link>
                </section>
            </div>
        </header>
    );
};
export default HomeHeader;
