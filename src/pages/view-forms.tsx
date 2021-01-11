import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import axios from 'axios';
import Meta from 'components/HeadMeta';
import HeaderBanner from 'components/Header';
import {Link} from '@reach/router';

// Renders all of the components that make up the 404 page - access this page by going to any invalid address
export default () => {

    const [formList, setFormList] = useState([]);

    useEffect(() => {
        axios.get(process.env.API_URL + process.env.GET_ENDPOINT)
            .then(function (response) {
                // handle success
                setFormList(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);


    console.log(process.env.REACT_APP_API_KEY);

    return (
        <Container fluid style={{backgroundColor: '#2d394a', paddingLeft: 40, paddingRight: 40, paddingBottom: 100, minHeight: '100vh'}}>
            <Meta
                title="Trinity | Form Submissions"
            />
            <Row>
                <Col>
                    <HeaderBanner/>
                </Col>
            </Row>
            <Row style={{paddingBottom: 20}}>
                {formList.map((form) => (
                    <Col xs={12} lg={4} key={form.id}>
                        <div style={{
                            backgroundColor: 'white',
                            fontFamily: 'Roboto',
                            borderRadius: 10,
                            padding: 20,
                            marginTop: 20
                        }}>
                            <p>First Name: {form.firstName}</p>
                            <p>Last Name: {form.lastName}</p>
                            <p>Website: {form.website}</p>
                            <p>Email: {form.email}</p>
                            <p>Phone: {form.phoneNumber}</p>
                            <p style={{fontSize: 14}}>ID: {form.id}</p>
                        </div>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col xs={12} lg={{span: 4, offset: 4}} className="text-center">
                    <Link to="/">
                        <Button className="not-found__button font-weight-bold text-uppercase">
                            Visit Our Homepage
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
