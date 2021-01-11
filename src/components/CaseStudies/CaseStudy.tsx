import React from 'react';

import Button from '../Button';

import {CaseStudyProps} from 'types';

// This renders the individual case study components for the Case Study section
export default (props: CaseStudyProps) => (
    <div className="case-studies__card d-flex flex-column text-center">
        <img
            src={props.image}
            width='100%'
            className="case-studies__image"
            alt={props.imageAlt}/>
        <p className="case-studies__heading text-uppercase font-weight-bold">Case Study</p>
        <h3 className="case-studies__title">{props.title}</h3>
        <p className="case-studies__content">{props.content}</p>
        <Button
            type="button"
            href="#"
            text="Read More"/>
    </div>
)