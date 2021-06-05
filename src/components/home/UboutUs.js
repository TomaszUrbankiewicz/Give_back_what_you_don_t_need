import React from 'react';
import LetteringWithDecoration from "../LetteringWithDecoration";
import foto from "../../assets/Signature.svg";

const UboutUs = () =>{
    return(
        <section name="UboutUs" className="ubout_us">
            <div className="ubout_us_text">
                <LetteringWithDecoration 
                    text2="O nas"
                />
                <div className="box_text">
                    <span>Nori grape silver beet broccoli kombu beet</span>
                    <span>greens fava bean potato quandong celery.Bunya</span>
                    <span>nuts black-eyed pea prairie turnip leek lentil.</span>
                    <span>turnip greens parsnip.</span>
                </div>
                <div className="signature">
                    <img src={foto}/>
                </div>
            </div>
            <div className="ubout_us_foto"></div>
        </section>
    );
};
export default UboutUs;
