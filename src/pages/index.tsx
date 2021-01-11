import React from 'react';
import Meta from 'components/HeadMeta';
import Header from 'components/Header';
import CallToAction from 'components/CallToAction';
import WorkingTogether from 'components/WorkingTogether';
import CaseStudies from 'components/CaseStudies';
import Carousel from 'components/Carousel';
import Footer from 'components/Footer';

// Renders all of the components that make up the index page
export default () => (
    <>
        <Meta
            title="Trinity | FREE eCommerce Strategy Sessions"
            description="You'll receive an expert analysis of your eCommerce website including: SEO diagnostics,
            speed assessment, UX review, and more..."/>
        <Header/>
        <CallToAction/>
        <WorkingTogether/>
        <CaseStudies/>
        <Carousel/>
        <Footer/>
    </>
)
