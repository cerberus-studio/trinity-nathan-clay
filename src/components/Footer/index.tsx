import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Emblem from '../../assets/emblem-white.png';

// This renders the Footer section
export default () => (
    <Container fluid className="footer">
        <Row>
            <Col className="text-center">
                <img src={Emblem} className="footer__image" alt="Trinity Logo - Free eCommerce Consultations"/>
                <p className="text-white">© 2020 Trinity Insight, LLC. All Rights Reserved.</p>
            </Col>
        </Row>
    </Container>
)