import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

import {ListProps} from 'types';

// This renders each item of the list in the call to action section
export default (props: ListProps) => (
    <li className="call-to-action__list-item">
        <span className="call-to-action__list-icon">
            <FontAwesomeIcon icon={faCheck} color="#A1D9D3"/>
        </span>
        {props.content}
    </li>
)