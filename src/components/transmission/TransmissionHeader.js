import React from 'react';
import LogInRegister from "../global/LogInRegister";
import Menu from "../global/Menu";
import LetteringWithDecoration from "../global/LetteringWithDecoration";

const TransmissionHeader = () => {
    return(
        <section className="transmission_heder">
            <div className="box_foto"></div>
            <div className="box_nav_heder">
                <nav>
                    <LogInRegister/>
                    <Menu/>
                </nav>
                <div className="container_header">
                    <LetteringWithDecoration
                        text="Oddaj rzeczy, których już nie chcesz"
                        text2="POTRZEBUJĄCYM"
                    />
                    <span>Wystarczą 4 proste kroki:</span>
                    <div className="container_box_steps">
                        <div className="box_steps">
                            <h1>1</h1>
                            <p>
                                <span>Wybierz</span> 
                                <span>rzeczy</span>
                            </p>
                        </div>
                        <div className="box_steps">
                            <h1>2</h1>
                            <p>
                                <span>Spakuj je</span> 
                                <span>w worki</span>
                            </p>
                        </div>
                        <div className="box_steps">
                            <h1>3</h1>
                            <p>
                                <span>Wybierz</span>
                                <span>fundację</span> 
                            </p>
                        </div>
                        <div className="box_steps">
                            <h1>4</h1>
                            <p>
                                <span>Zamów</span> 
                                <span>kuriera</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default TransmissionHeader;
