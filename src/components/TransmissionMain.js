import React from 'react';
import HomeContakt from "../components/home/HomeContakt";
import HomeFooter from "../components/home/HomeFooter";
import TransmissionHeader from "../components/transmission/TransmissionHeader";

const TransmissionMain = () => {
    return(
        <>
            <TransmissionHeader/>
            <HomeContakt/>
            <HomeFooter/>
        </>
    )
}
export default TransmissionMain;
