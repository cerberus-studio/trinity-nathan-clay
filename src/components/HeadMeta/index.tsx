import React from 'react';
import {Helmet} from 'react-helmet';
import {MetaProps} from 'types';

// Injects SEO information into pages
export default (props: MetaProps) => {

    // Render <meta> tag if description was passed in
    const Description = () => {
        if (props.description) {
            return <meta name="description" content={props.description}/>
        }
        return null
    }

    return (
        <Helmet>
            <title>{props.title}</title>
            <Description />
        </Helmet>
    )
}