import React from 'react';
import {Link} from 'react-router-dom';

const LogInRegister = () => {
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
};
export default LogInRegister;
