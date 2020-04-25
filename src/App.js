import React, {Fragment} from 'react';
import {Container} from "flux/utils";
import {getState, getStores} from "./container/AppContainer";
import {ConnectedMonitor} from "./Monitor";

function App(props) {
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
            <ConnectedMonitor/>
            <br/>
            <ConnectedMonitor/>
            <br/>
            <ConnectedMonitor/>
        </Fragment>
    );
}

export const ConnectedApp = Container.createFunctional(App, getStores, getState);
