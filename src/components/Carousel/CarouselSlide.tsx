import React from 'react';

import {CarouselSlideProps} from 'types';

// This renders individual carousel items within the Carousel section
export default (props: CarouselSlideProps) => (
    <img
        src={props.image}
        alt={props.imageAlt}
        width="100%"/>
)