import React, { useState } from 'react';


const ListBox = (props) =>{
    if(props.viev==1){
        return(
            <section className="box_list">
                <div className="box_p">
                    <p1>
                        {`W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                        współpracujemy. Możesz sprawdzić czym się zajmują, 
                        komu pomagają i czego potrzebują.`} 
                    </p1>
                </div>
            </section>
        );
    };
    if(props.viev==2){
        return(
            <section className="box_list">
                <div className="box_p">
                    <p1>
                        {`W naszej bazie znajdziesz listę zweryfikowanych organizacji pozarządowych.
                        Możesz sprawdzić czym się zajmują, 
                        komu pomagają i czego potrzebują.`} 
                    </p1>
                </div>
            </section>
        );
    };
    if(props.viev==3){
        return(
            <section className="box_list">
                <div className="box_p">
                    <p1>
                        {`W naszej bazie znajdziesz listę lokalnych zbiurek. 
                        Możesz sprawdzić czym się zajmują, 
                        komu pomagają i czego potrzebują.`} 
                    </p1>
                </div>
            </section>
        );
    };
};
export default ListBox;
