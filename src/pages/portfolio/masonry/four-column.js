import React, {Fragment, useState} from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioMasonryFourColumn from "../../../templates/portfolio/masonry/four-column";
import FooterOne from "../../../components/footer/FooterOne";

import portfolioData from '../../../data/portfolio/PortfolioMasonry';

const PortfolioMasonryFourColumnPage = () => {

    const [count, setCount] = useState(12);
    const [loading, setLoading] = useState(false);
    const portfolios = portfolioData.slice(0, count);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCount(count + 4);
            setLoading(false);
        }, 200);
    };

    const allItems = count >= portfolioData.length;

    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <PortfolioMasonryFourColumn portfolios={portfolios} loading={loading} fullWidth={false}/>
            <FooterOne allItems={allItems} loadHandler={loadMore} />
        </Fragment>
    );
};

export default PortfolioMasonryFourColumnPage;