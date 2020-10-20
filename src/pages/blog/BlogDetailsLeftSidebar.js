import React from 'react';
import Header from "../../components/header/HeaderOne";
import FooterOne from "../../components/footer/FooterOne";
import TemplateBlogDetailsWithSidebar from "../../templates/BlogDetails";
import SideHeader from "../../components/SideHeader";

const BlogDetailsLeftSidebarPage = () => {
    return (
        <div>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateBlogDetailsWithSidebar sidebarPosition="left"/>
            <FooterOne position={'fixed'}/>
        </div>
    );
};

export default BlogDetailsLeftSidebarPage;