import HomeHeader from "./home/HomeHeader";
import HomeStatisticsBox from"./home/HomeStatisticsBox";
import HomeWhatIsGoingOn from"./home/HomeWhatIsGoingOn";
import HomeAboutUs from "./home/HomeAboutUs";
import HomeWhoWeHelp from "./home/HomeWhoWeHelp";
import HomeContakt from "./home/HomeContakt";
import HomeFooter from "./home/HomeFooter";

const Home = () =>  {
    return(
        <>
            <HomeHeader/>
            <HomeStatisticsBox/>
            <HomeWhatIsGoingOn/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContakt/>
            <HomeFooter/>
        </>
    );
};
export default Home;
