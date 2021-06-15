import React from 'react';
import { Link } from 'react-scroll'

const MenuHome = () => {
    
    return(
        <div className="menu">
            <ul>
                <li><Link  activeClass="active" className="test1" to="HomeHeader" spy={true} smooth={true} duration={1000} >Start</Link></li>
                <li><Link activeClass="active" className="test2" to="WhatIsGoingOn" spy={true} smooth={true} duration={1000}>O co chodzi?</Link></li>
                <li><Link activeClass="active" className="test3" to="UboutUs" spy={true} smooth={true} duration={1000}>O nas</Link></li>
                <li><Link activeClass="active" className="test4" to="who_we_help" spy={true} smooth={true} duration={1000}>Fundacja i organizacje</Link></li>
                <li><Link activeClass="active" className="test5" to="contakt" spy={true} smooth={true} duration={1000}>Kontakt</Link></li>
            </ul>
        </div>
    );
};
export default MenuHome; 
