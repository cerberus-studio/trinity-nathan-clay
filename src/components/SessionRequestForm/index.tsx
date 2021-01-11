import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

import axios from 'axios';
import validator from 'email-validator';

import SessionRequestField from './SessionRequestField';
import Button from '../Button';

// This renders the Session Request Form
export default () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [emailInvalid, setEmailInvalid] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [headerText, setHeaderText] = useState('Website Strategy Session');

    const submit = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (validator.validate(email)) {
            setEmailInvalid(false);
            const url = process.env.API_URL + process.env.POST_ENDPOINT;

            axios.post(url, {
                firstName: firstName,
                lastName: lastName,
                website: website,
                email: email,
                phoneNumber: phoneNumber,
            }).then(function () {
                setHeaderText('Thank you!');
            }).catch(function (error) {
                alert('')
                console.log(error);
            });

            setHeaderText('Submitting...');
            setFormSubmitted(true);
            setFirstName('');
            setLastName('');
            setWebsite('');
            setEmail('');
            setPhoneNumber('');
        } else {
            setEmailInvalid(true);
        }
    }

    return (
        <Form className="session-request-form" noValidate>
            <p className="session-request-form__heading text-center text-uppercase font-weight-bold">Free</p>
            <h2 className="session-request-form__subheading text-center">{headerText}</h2>
            <SessionRequestField
                name="formFirstName"
                label="First Name"
                value={firstName}
                onChange={setFirstName}
                disabled={formSubmitted}/>
            <SessionRequestField
                name="formLastName"
                label="Last Name"
                value={lastName}
                onChange={setLastName}
                disabled={formSubmitted}/>
            <SessionRequestField
                name="formWebsite"
                label="Website"
                value={website}
                onChange={setWebsite}
                disabled={formSubmitted}/>
            <SessionRequestField
                name="formEmail"
                label="Email"
                type="email"
                required={true}
                value={email}
                onChange={setEmail}
                invalid={emailInvalid}
                disabled={formSubmitted}/>
            <SessionRequestField
                name="formPhoneNumber"
                label="Phone Number"
                type="tel"
                value={phoneNumber}
                onChange={setPhoneNumber}
                disabled={formSubmitted}/>
            <div className="session-request-form__button-container text-center">
                <Button
                    type="submit"
                    text="Request Session"
                    onClick={submit}
                    disabled={formSubmitted}/>
            </div>
        </Form>
    )
}
