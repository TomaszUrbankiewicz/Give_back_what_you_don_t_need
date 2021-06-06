import React, { useEffect, useState } from 'react';
import ButtonListChage from "../used_at_home/ButtonListChage";

const WritingAList = (props) => {
const [set, setSet]=useState([])//state do którego zapisujemy tablice obiektów z props
const [change, setChange]=useState(0)//state który pokazuje listę elementów

    useEffect( () => {
        let set_interim=[]
        for(let i=0; i<props.set.length; i=i+3){
            set_interim.push(props.set.slice(0+i,3+i))
        };
        setSet(set_interim)
    },[]);

    const change_sides = (e) => {
        setChange(e.currentTarget.id-1)
    }

    return(
        <section className="list">
            <ul className="box_list_">
                {(set.length>0) ? set[change].map( (el,id) => {
                    return(
                        <li className="box_list_li" key={id}>
                            <div className="list_left">
                                <h1>{el.text1}</h1>
                                <p>{el.text2}</p>
                            </div>
                            <div className="list_rights">
                                <span>{el.text3}</span>
                            </div>
                        </li>
                    );
                }) : null
                }
            </ul>
            <div className="box_buton_change">
                {(set.length>1) ? set.map( (el,id) => {
                    return(
                        <ButtonListChage 
                            active={(change==id)?true:false}
                            button_number={id+1}
                            change_sides={change_sides}
                        />
                    );
                }) : null
                }
            </div> 
        </section>   
    );
};
export default WritingAList;
