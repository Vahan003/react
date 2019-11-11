import React from 'react';
function Button(el,name) {
const button = <button id="but" className="button" onClick={el}>{name}</button>
 return button;
}

export default Button;