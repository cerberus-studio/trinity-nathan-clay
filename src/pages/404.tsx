import React from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import {Link} from '@reach/router';
import Meta from 'components/HeadMeta';
import HeaderBanner from 'components/Header';

// Renders all of the components that make up the 404 page - access this page by going to any invalid address
export default () => (
    <Container fluid className="not-found">
        <Meta
            title="Trinity | 404 - Not Found!"
        />
        <Row>
            <Col>
                <HeaderBanner/>
            </Col>
        </Row>
        <Row className="text-white text-center">
            <Col>
                <h1 className="not-found__title">Oh no! We couldn't find that page :(</h1>
                <Link to="/">
                    <Button className="not-found__button font-weight-bold text-uppercase">
                        Visit our homepage instead?
                    </Button>
                </Link>
            </Col>
        </Row>
    </Container>
)
