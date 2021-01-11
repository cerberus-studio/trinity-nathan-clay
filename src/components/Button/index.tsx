import React from 'react';
import {Button} from 'react-bootstrap';
import {ButtonProps} from 'types';

export default (props: ButtonProps) => (
    <Button
        type={props.type}
        href={props.href}
        className="button text-uppercase font-weight-bold shadow-none"
        disabled={props.disabled}
        onClick={(e)=>{
            if(props.onClick) props.onClick(e);
        }}>
        {props.text}
    </Button>
)