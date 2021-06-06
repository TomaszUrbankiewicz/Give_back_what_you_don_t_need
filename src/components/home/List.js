import React, { useEffect, useState } from 'react';
import ButtonListChage from "../home/ButtonListChage";

const List = (props) =>{
    const [array, setArray]=useState([])//state do którego zapisujemy tablice obiektów z props
    const [change, setChange]=useState(0)//state który pokazuje listę elementów

    useEffect( () =>{
      let array_test=[]
      for(var i=0; i<props.array.length; i=i+3){
        array_test.push(props.array.slice(0+i,3+i))
      };
      setArray(array_test)
    },[]);

    const change_sides = (e) =>{
      setChange(e.currentTarget.id-1)
    }

    return(
      <section className="list">
        <ul className="box_list_">
          {(array.length>0)? array[change].map( (el,id) =>{
            return(
              <li className="box_list_li" key={id}>
                <div className="list_left">
                  <h1>
                    {el.text1}
                  </h1>
                  <p>
                    {el.text2}
                  </p>
                </div>
                <div className="list_rights">
                  <span>
                    {el.text3}
                  </span>
                </div>
              </li>
            );
          }):null}
        </ul>
        <div className="box_buton_change">
          {(array.length>1)? array.map( (el,id) =>{
            return(
              <ButtonListChage 
                active={(change==id)?true:false}
                button_number={id+1}
                change_sides={change_sides}
              />
            );
          }):null}
        </div> 
      </section>   
    );

};
export default List;
