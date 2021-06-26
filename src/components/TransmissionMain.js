import React from 'react';
import HomeContakt from "../components/home/HomeContakt";
import HomeFooter from "../components/home/HomeFooter";
import TransmissionHeader from "../components/transmission/TransmissionHeader";
import TransmissionForm from "../components/transmission/TransmissionForm";

const TransmissionMain = () => {
    return(
        <>
            <TransmissionHeader/>
            <TransmissionForm/>
            <HomeContakt/>
            <HomeFooter/>
        </>
    );
};
export default TransmissionMain;
