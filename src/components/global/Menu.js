import React from 'react';
import {useHistory} from 'react-router-dom';
import { scroller } from 'react-scroll'

const Menu = () => {
    const h=useHistory()

    const zdarzenie = (e) => {
        setTimeout(()=>{
            scroller.scrollTo(e.target.name, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            })
        },0)
        h.push('/');
        console.log("jestem")
    }

    return(
        <div className="menu">
            <ul>
                <li>
                    <button name="HomeHeader" onClick={zdarzenie}>Start</button>
                </li>
                <li>
                    <button name="WhatIsGoingOn" onClick={zdarzenie}>O co chodzi?</button>
                </li>
                <li>
                    <button name="UboutUs" onClick={zdarzenie}>O nas</button>
                </li>
                <li>
                    <button name="who_we_help" onClick={zdarzenie}>Fundacja i organizacje</button>
                </li>
                <li>
                    <button name="contakt" onClick={zdarzenie}>Kontakt</button>
                </li>
            </ul>
        </div>
    );
};
export default Menu; 