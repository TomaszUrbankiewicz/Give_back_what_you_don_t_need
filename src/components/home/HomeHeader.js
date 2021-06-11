import {Link} from 'react-router-dom';
import React from 'react';
import MenuHome from "../home/used_at_home/MenuHome";
import LogInRegister from "../not_assigned/LogInRegister";
import LetteringWithDecoration from "../not_assigned/LetteringWithDecoration";

const HomeHeader = () => {
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
