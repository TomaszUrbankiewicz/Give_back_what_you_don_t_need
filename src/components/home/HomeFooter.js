import React from 'react';
import foto1 from "../../assets/Facebook.svg";
import foto2 from "../../assets/Instagram.svg";

const HomeFooter = () => {
    return(
        <section className="footer">
            <div className="footer_text">
                <h1>Copyright by Codders Lab</h1>
            </div>
            <div className="footer_foto">
                <img src={foto1}/>
                <img src={foto2}/>
            </div>
        </section>
    );
};
export default HomeFooter;
