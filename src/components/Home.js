
import HomeHeader from "./home/HomeHeader";
import StatisticsComponent from"./home/StatisticsComponent";
import WhatIsGoingOn from"./home/WhatIsGoingOn";

const Home=()=> {
  return (
      <>
        <HomeHeader name="HomeHeader"/>
        <section className="statistics">
          <StatisticsComponent number="10" title="ODDANYCH WORKÓW" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas neque pretium luctus volutpat. Aliquam hendrerit ultrices ante. "/>
          <StatisticsComponent number="5" title="WSPARTYCH ORGANIZACJI" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas neque pretium luctus volutpat. Aliquam hendrerit ultrices ante."/>
          <StatisticsComponent number="7" title="ZORGANIZOWANYCH ZBIÓREK" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas neque pretium luctus volutpat. Aliquam hendrerit ultrices ante. "/>
        </section>
        <WhatIsGoingOn name="WhatIsGoingOn"/>
      </>
  );
}

export default Home;
