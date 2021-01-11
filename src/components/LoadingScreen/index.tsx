import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

// This renders the loading screen that briefly displays before the page is loaded
export default () => (
    <Container fluid className="loading">
        <Row className="loading__row">
            <Col className="d-flex align-items-center justify-content-center text-white">
                Loading Trinity, please wait...
            </Col>
        </Row>
    </Container>
)