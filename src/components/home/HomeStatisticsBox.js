import React from 'react';
import StatisticsComponent from"../home/usedHome/StatisticsComponent";

const HomeStatisticsBox = () => {
    return(
        <section className="statistics">
            <StatisticsComponent 
                number="10" 
                title="ODDANYCH WORKÓW" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas neque pretium luctus volutpat. Aliquam hendrerit ultrices ante. "
            />
            <StatisticsComponent 
                number="5" 
                title="WSPARTYCH ORGANIZACJI" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas neque pretium luctus volutpat. Aliquam hendrerit ultrices ante."
            />
            <StatisticsComponent 
                number="7" 
                title="ZORGANIZOWANYCH ZBIÓREK" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas neque pretium luctus volutpat. Aliquam hendrerit ultrices ante. "
            />
        </section>
    );
};
export default HomeStatisticsBox;
