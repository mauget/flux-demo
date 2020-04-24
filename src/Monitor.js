import React from 'react';

export default function Monitor(props) {
    const {count} = {...props};
    console.log('monitor props', props);

    return (
        <div className={"flex-container"}>
            <h3>Monitor</h3>
            <div>
                <label>Value {count}</label>
            </div>
        </div>
    );
}
