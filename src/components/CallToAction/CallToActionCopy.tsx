import React from 'react';
import {Col, Row} from 'react-bootstrap';

import CopyHeader from './CopyHeader';
import CopyBody from './CopyBody';

// This renders the copy for the call to action section
export default () => (
    <>
        <Row>
            <Col xs={12}>
                <CopyHeader/>
            </Col>
        </Row>
        <Row>
            <Col xs={12} className="call-to-action__list">
                <CopyBody/>
            </Col>
        </Row>
    </>
)