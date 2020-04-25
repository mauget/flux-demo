import AppStore from "./AppStore";
import AppActions from "./AppActions";

export const getStores = () => [AppStore];

export const getState = () => {
    return {
        count: AppStore.getState().get('count'),

        onIncrement: AppActions.increment,
        onDecrement: AppActions.decrement,
    };
}
