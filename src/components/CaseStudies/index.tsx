import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import caseStudiesData from './CaseStudiesData'
import CaseStudy from './CaseStudy';

// This renders the Case Studies section
export default () => (
    <Container fluid className="case-studies">
        <Row>
            <Col className="text-white text-center">
                <h2 className="case-studies__primary-title">
                    Getting you from here to there is our mission.
                </h2>
                <h3 className="case-studies__primary-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, orci ac mollis
                    sollicitudin, felis lectus turpis, eu leo sapien quis mi.
                </h3>
            </Col>
        </Row>
        <Row className="case-studies__bottom-row">
            {caseStudiesData.map((data) => (
                <Col xs={12} lg={6} className="case-studies__column">
                    <CaseStudy
                        image={data.logo}
                        imageAlt={data.alt}
                        title={data.title}
                        content={data.content}/>
                </Col>
            ))}
        </Row>
    </Container>
)