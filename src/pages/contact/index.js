import React,{Fragment} from 'react';
import Contact from "../../container/contact";
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import FooterOne from "../../components/footer/FooterOne";

const ContactPage = () => {
    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <Contact/>
            <FooterOne position={'static'}/>
        </Fragment>
    );
};

export default ContactPage;