import AppStore from "./AppStore";
import App from "../App";
import {Container} from "flux/utils";
import AppActions from "./AppActions";
import Monitor from "../Monitor";

function getStores() {
    return [AppStore];
}

function getState() {
    return {
        count: AppStore.getState().get('count'),

        onIncrement: AppActions.increment,
        onDecrement: AppActions.decrement,
    };
}

export const MonitorContainer = Container.createFunctional(Monitor, getStores, getState);
export const AppContainer = Container.createFunctional(App, getStores, getState);
export default AppContainer;
