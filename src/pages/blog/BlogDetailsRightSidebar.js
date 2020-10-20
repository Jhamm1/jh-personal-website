import React from 'react';
import Header from "../../components/header/HeaderOne";
import FooterOne from "../../components/footer/FooterOne";
import TemplateBlogDetailsWithSidebar from "../../templates/BlogDetails";
import SideHeader from "../../components/SideHeader";

const BlogDetailsRightSidebarPage = () => {
    return (
        <div>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateBlogDetailsWithSidebar sidebarPosition="right"/>
            <FooterOne position={'fixed'}/>
        </div>
    );
};

export default BlogDetailsRightSidebarPage;