import React from 'react';
import Header from "../../components/header/HeaderOne";
import FooterOne from "../../components/footer/FooterOne";
import TemplateBlogWithSidebar from "../../templates/blog/BlogWithSidebar";
import SideHeader from "../../components/SideHeader";

const BlogTwoColumnLeftSidebarPage = () => {
    return (
        <div>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateBlogWithSidebar
                blogColumnClass={'col-12 col-md-6'}
                sidebarPosition="left"
                showPostsPerPage={6}
            />
            <FooterOne position={'fixed'}/>
        </div>
    );
};

export default BlogTwoColumnLeftSidebarPage;