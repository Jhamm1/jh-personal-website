import React,{Fragment} from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import TemplateService from "../../templates/service";
import FooterOne from "../../components/footer/FooterOne";

const ContactPage = () => {
    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateService/>
            <FooterOne position={'static'}/>
        </Fragment>
    );
};

export default ContactPage;