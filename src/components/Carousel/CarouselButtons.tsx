import React from 'react';

import {CarouselButtonsProps} from 'types';

import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

// This renders custom buttons for the Carousel
const CarouselButtons = (props: CarouselButtonsProps) => {
    return (
        <>
            <button className="carousel__button-prev" onClick={props.previous}>
                <img src={arrowLeft} width="30%" alt="Left Arrow"/>
            </button>
            <button className="carousel__button-next" onClick={props.next}>
                <img src={arrowRight} width="30%" alt="Right Arrow"/>
            </button>
        </>
    );
};

// The Carousel expects a button component;
// next, previous, and goToSlide get passed in from the Carousel and are just skeletons here
export default <CarouselButtons
    next={() => {}}
    previous={() => {}}
    goToSlide={() => {}} />