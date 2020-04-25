import React from 'react';
import {Container} from "flux/utils";
import {getState, getStores} from "./container/AppContainer";

function Monitor(props) {
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

export const ConnectedMonitor = Container.createFunctional(Monitor, getStores, getState);
