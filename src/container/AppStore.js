import {OrderedMap} from 'immutable';
import {ReduceStore} from 'flux/utils';
import {AppDispatcher} from "./AppDispatcher";
import * as ActionTypes from "./ActionTypes";

class AppStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    // noinspection JSUnusedGlobalSymbols
    getInitialState() {
        return OrderedMap({count: 42});
    }
    // noinspection JSUnusedGlobalSymbols
    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ACTION_INCREMENT:
                return OrderedMap({count: state.get('count') + 1});

            case ActionTypes.ACTION_DECREMENT:
                return OrderedMap({count: state.get('count') - 1})

            default:
                return state;
        }
    }
}

export default new AppStore();
