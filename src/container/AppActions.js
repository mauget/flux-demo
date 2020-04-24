import * as ActionTypes from "./ActionTypes";
import {AppDispatcher} from "./AppDispatcher";

const Actions = {
    increment (count) {
        AppDispatcher.dispatch({
            type: ActionTypes.ACTION_INCREMENT,
            count,
        });
    },
    decrement(count) {
        AppDispatcher.dispatch({
            type: ActionTypes.ACTION_DECREMENT,
            count,
        });
    },
};

export default Actions;
