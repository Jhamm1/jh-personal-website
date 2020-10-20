import React from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import ContentAboutPage from "../../templates/AboutPage";
import FooterOne from "../../components/footer/FooterOne";

const AboutPage = () => {
    return (
        <div className={`main-wrapper`}>
            <Header/>
            <SideHeader mobile={true}/>
            <ContentAboutPage/>
            <FooterOne position={'fixed'}/>
        </div>
    );
};

export default AboutPage;