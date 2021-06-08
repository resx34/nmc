import React from 'react';
import './Button.css'


function Button(props) {
    return (
        <a href={props.link} target="blank" className="button">{props.btnText}</a>
    )
}

export default Button;
