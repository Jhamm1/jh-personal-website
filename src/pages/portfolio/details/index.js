import React, {Fragment} from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import FooterOne from "../../../components/footer/FooterOne";
import TemplatePortfolioDetails from "../../../templates/portfolio/details";

const PortfolioDetailsPage = () => {
    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplatePortfolioDetails/>
            <FooterOne position='fixed'/>
        </Fragment>
    );
};

export default PortfolioDetailsPage;