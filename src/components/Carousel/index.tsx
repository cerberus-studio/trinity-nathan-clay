import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import Carousel from 'react-multi-carousel';    // using forked version with bugfix until PR is accepted:
                                                // https://github.com/cerberus-studio/react-multi-carousel
import carouselConfig from './CarouselConfig';
import carouselData from './CarouselData'
import CarouselSlide from './CarouselSlide';
import CarouselButtons from './CarouselButtons';

// This renders and configures the Carousel section
export default () => (
    <Container fluid className="carousel">
        <Row>
            <Col>
                <h2 className="carousel__heading text-center text-uppercase font-weight-bold">
                    Trusted By:
                </h2>
            </Col>
        </Row>
        <Row>
            <Col xs={12} className="carousel__column">
                <Carousel
                    draggable={false}
                    responsive={carouselConfig}
                    slidesToSlide={1}
                    infinite={true}
                    keyBoardControl={false}
                    showDots={true}
                    renderDotsOutside={true}
                    renderButtonGroupOutside={true}
                    transitionDuration={300}
                    containerClass="carousel__container"
                    itemClass="carousel__item"
                    arrows={false}
                    customButtonGroup={CarouselButtons}>
                    {carouselData.map((data) => (
                        <CarouselSlide
                            image={data.logo}
                            imageAlt={data.alt}/>
                    ))}
                </Carousel>
            </Col>
        </Row>
    </Container>
)