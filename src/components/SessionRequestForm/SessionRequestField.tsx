import React from 'react';
import {Form} from 'react-bootstrap';

import {SessionRequestFieldProps} from 'types';

// This renders each field in the Session Request Form
export default (props: SessionRequestFieldProps) => (
    <Form.Group controlId={props.name} className="session-request-form__input-container">
        <Form.Label className="session-request-form__field">
            {props.label}
            {props.required &&
            <span> *</span>
            }
        </Form.Label>
        <Form.Control
            disabled={props.disabled}
            type={props.type || 'text'}
            className="session-request-form__input"
            value={props.value}
            onChange={(e) => {props.onChange(e.target.value)} }
            isInvalid={props.invalid}
        />
    </Form.Group>
)