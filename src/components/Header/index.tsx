import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Logo from '../../assets/trinity-logo.png';

// This renders the header
export default () => (
    <Container fluid className="header">
        <Row className="header__row">
            <Col xs={12} lg={6} className="header__logo-wrapper">
                {<img src={Logo} className="header__logo" alt='Trinity Logo - Free eCommerce Consultations'/>}
            </Col>
            <Col xs={12} lg={6} className="header__phone d-flex align-items-center text-white">
                Give us a call!&nbsp;<strong><a href="tel:866-535-8807" className="text-white">866-535-8807</a></strong>
            </Col>
        </Row>
    </Container>
)