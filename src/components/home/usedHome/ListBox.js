import React from 'react';
import WritingAList from "../usedHome/WritingAList";
import foundation from "../../../data/foundation";
import local from "../../../data/local";
import organization from "../../../data/organization";


const ListBox = (props) => {
    if(props.viev==1){
        return(
            <section className="box_list">
                <div className="box_p">
                    <p>
                        {foundation.p}
                    </p>
                </div>
                <WritingAList 
                    key="1" 
                    viev={props.viev} 
                    set={foundation.list}
                />
            </section>
        );
    };
    if(props.viev==2){
        return(
            <section className="box_list">
                <div className="box_p">
                    <p>
                        {organization.p}
                    </p>
                </div>
                <WritingAList 
                    key="2" 
                    viev={props.viev} 
                    set={organization.list}
                />
            </section>
        );
    };
    if(props.viev==3){
        return(
            <section className="box_list">
                <div className="box_p">
                    <p>
                        {local.p}
                    </p>
                </div>
                <WritingAList  
                    key="3" 
                    viev={props.viev} 
                    set={local.list}
                />
            </section>
        );
    };
};
export default ListBox;
