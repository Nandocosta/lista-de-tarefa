import React, { useState } from 'react';

import './Button.css';

const Button = ({children, onClick}) =>{
    return (
        <div>
            <button onClick={onClick} className='Add-button' >
                {children}
            </button>
        </div>
    );
}

export default Button;