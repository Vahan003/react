import React from 'react';
function Button(props) {
const button = <button id="but" className="button" onClick={props.func}>{props.name}</button>
 return button;
}

export default Button;