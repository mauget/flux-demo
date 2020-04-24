import React, {Fragment} from 'react';
import {MonitorContainer} from "./container/AppContainer";

export default function App(props) {
    const {count, onIncrement, onDecrement, badAction} = {...props};
    console.log('App props', props);

    return (
        <Fragment>
            <div className={"flex-container"}>
                <h3>Action</h3>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <label>{count}</label>
                    <button onClick={onIncrement}>+</button>
                    <button onClick={badAction}>Unknown Action</button>
                </div>
            </div>
            <br/>
            <MonitorContainer/>
            <br/>
            <MonitorContainer/>
            <br/>
            <MonitorContainer/>
        </Fragment>
    );
}
