import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Menu = () =>{
    return(
        <div className="menu">
            <ul>
                <li><Link activeClass="active" className="test1" to="HomeHeader" spy={true} smooth={true} duration={1000} >Start</Link></li>
                <li><Link activeClass="active" className="test2" to="WhatIsGoingOn" spy={true} smooth={true} duration={1000}>O co chodzi?</Link></li>
                <li><Link activeClass="active" className="test3" to="UboutUs" spy={true} smooth={true} duration={1000}>O nas</Link></li>
                <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={1000}>Fundacja i organizacje</Link></li>
                <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={1000}>Kontakt</Link></li>
            </ul>
        </div>
    );
};
export default Menu; 
