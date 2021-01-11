import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import Card from './Card';
import PerspectiveCopy from './PerspectiveCopy';

import vidChat from '../../assets/vid-chat.png';
import roadMap from '../../assets/roadmap.png';
import growth from '../../assets/growth.png';

// This renders the Working Together section with three card components
export default () => (
    <Container fluid className="working-together">
        <Row>
            <Col>
                <h2 className="working-together__heading text-center">
                    We make working together easy.
                </h2>
            </Col>
        </Row>
        <Row className="working-together__card-row">
            <Col xs={12} lg={4}>
                <Card
                    image={vidChat}
                    imageLabel="30-Minute Video Conversation"
                    title="1. 30-Minute Video Conversation"
                    content="Get started with a free consultation to help us understand where our team can best help you build and grow your online business."/>
            </Col>
            <Col xs={12} lg={4}>
                <Card
                    image={roadMap}
                    imageLabel="Diagnostic Roadmap"
                    title="2. Diagnostic Roadmap"
                    content="Within a week we’ll diagnose your biggest opportunities and build a custom roadmap to optimize your ecommerce experience."/>
            </Col>
            <Col xs={12} lg={4}>
                <Card
                    image={growth}
                    imageLabel="Growth Services"
                    title="3. Growth Services"
                    content="Our team will start immediately taking action to make improvements and deliver a brand experience that drives lifetime value."/>
            </Col>
        </Row>
        <Row>
            <Col>
                <h2 className="working-together__heading text-center">
                    Use our perspective to reach new levels
                </h2>
            </Col>
        </Row>
        <Row className="working-together__copy-row">
            <Col xs={12} lg={{span: 8, offset: 2}} className="working-together__copy">
                <PerspectiveCopy/>
            </Col>
        </Row>
    </Container>
)