
import HomeHeader from "./home/HomeHeader";
import StatisticsBox from"./home/StatisticsBox";
import WhatIsGoingOn from"./home/WhatIsGoingOn";
import AboutUs from "./home/AboutUs";
import WhoWeHelp from "./home/WhoWeHelp";

const Home = () =>{
  return(
      <>
        <HomeHeader/>
        <StatisticsBox/>
        <WhatIsGoingOn/>
        <AboutUs/>
        <WhoWeHelp/>
      </>
  );
};
export default Home;
