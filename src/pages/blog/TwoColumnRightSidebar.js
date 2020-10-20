import React from 'react';
import Header from "../../components/header/HeaderOne";
import FooterOne from "../../components/footer/FooterOne";
import TemplateBlogWithSidebar from "../../templates/blog/BlogWithSidebar";
import SideHeader from "../../components/SideHeader";

const BlogTwoColumnRightSidebarPage = () => {
    return (
        <div>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateBlogWithSidebar
                blogColumnClass={'col-md-6 col-12'}
                sidebarPosition="right"
                showPostsPerPage={6}
            />
            <FooterOne position={'fixed'}/>
        </div>
    );
};

export default BlogTwoColumnRightSidebarPage;