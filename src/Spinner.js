import React from 'react';

const Spinner = (props) => {
    return (
    <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
    </div>
    )
}

Spinner.defaultProps = { // default if 'message' prop is NOT passed in
    message: 'Loading...'
}

export default Spinner;