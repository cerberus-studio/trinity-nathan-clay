import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import CallToActionCopy from './CallToActionCopy';
import SessionRequestForm from 'components/SessionRequestForm';

// Renders the header components
export default () => (
    <>
        <Container fluid className="call-to-action">
            <Row className="call-to-action__row">
                <Col xs={12} lg={6} className="call-to-action__left-column">
                    <CallToActionCopy/>
                </Col>
                <Col xs={12} lg={6} className="call-to-action__right-column">
                    <SessionRequestForm/>
                </Col>
            </Row>
            <hr/>
        </Container>
    </>
)