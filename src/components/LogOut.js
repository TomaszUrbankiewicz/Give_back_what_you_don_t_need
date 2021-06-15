import React from 'react';
import LetteringWithDecoration from "../components/global/LetteringWithDecoration";
import Menu from "../components/global/Menu";
import LogInRegister from "./global/LogInRegister";
import {Link} from 'react-router-dom';

const LogOut = () => {
    return(
        <section className="log_uot">
            <nav>
                <LogInRegister/>
                <Menu/>
            </nav>
            <div className="container">
                <LetteringWithDecoration
                    text="Wylogowanie nastąpiło"
                    text2="pomyślnie!"
                />
                <button>
                    <Link to="/">
                        Strona główna
                    </Link>
                </button>
            </div>
        </section>
    );
};
export default LogOut;
