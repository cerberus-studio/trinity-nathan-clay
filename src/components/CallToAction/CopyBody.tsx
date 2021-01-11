import React from 'react';

import ListItem from './ListItem';

export default () => (
    <>
        <p>
            In a <strong>FREE</strong> consultation discussion with our CEO,{' '}
            <a href="#" className="call-to-action__name">
                <u>Craig Smith</u>
            </a>
            {' '}you will receive a live website review, complete with our toolsets, to help you understand
            what digital growth opportunities exist in your business.
        </p>
        <p>Within your strategy session you will receive:</p>
        <ul className="list-unstyled">
            <ListItem content="An expert analysis of your eCommerce store or website"/>
            <ListItem content="Diagnostic SEO Crawl Report"/>
            <ListItem content="Site Speed & Performance Assessment"/>
            <ListItem content="User Experience Review and Recommendations"/>
            <ListItem content="Email & Marketing Automation Review"/>
            <ListItem content="No Obligations & 100% FREE"/>
        </ul>
    </>
)