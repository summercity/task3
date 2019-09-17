import React from 'react';

import './style.css';

const Hourglass = (props) => {
    return (
        <div>
            <div className="lds-hourglass"></div>
            <div className="lds-hourglass-text">{props.loadingMsg}</div>
        </div>
    )
}

export default Hourglass;
