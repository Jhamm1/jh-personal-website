import React, {Fragment, useState} from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridTwoColumn from "../../../templates/portfolio/grid/two-column";
import FooterOne from "../../../components/footer/FooterOne";
import portfolioData from '../../../data/portfolio'

const PortfolioGridTwoColumnPage = () => {
    const [count, setCount] = useState(8);
    const [loading, setLoading] = useState(false);
    const portfolios = portfolioData.slice(0, count);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCount(count + 2);
            setLoading(false);
        }, 200);
    };

    const allItems = count >= portfolioData.length;

    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <PortfolioGridTwoColumn portfolios={portfolios} loading={loading}/>
            <FooterOne allItems={allItems} loadHandler={loadMore} />
        </Fragment>
    );
};

export default PortfolioGridTwoColumnPage;