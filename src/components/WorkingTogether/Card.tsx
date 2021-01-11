import React from 'react';
import {Card} from 'react-bootstrap';

import {CardProps} from 'types';

// This renders individual cards for the Working Together section
export default (props: CardProps) => (
    <Card className="working-together__card" style={{backgroundImage: 'url(' + props.image + ')'}}
          aria-label={props.imageLabel}>
        <Card.Body className="working-together__body">
            <Card.Title className="working-together__title text-center text-uppercase font-weight-bold">
                {props.title}
            </Card.Title>
            <Card.Text className="working-together__content text-center">
                {props.content}
            </Card.Text>
        </Card.Body>
    </Card>
)