import * as types from './constants'

let counterReducer = function (state = {}, action) {
    switch (action.type) {

        case types.INC_COUNTER:
            return Object.assign({}, state, {counter: state.counter + action.payload});

        case types.DEC_COUNTER:
            return Object.assign({}, state, {counter: state.counter - action.payload});

        case types.RESET_COUNTER:
            return Object.assign({}, state, {progress: true});

        case types.COUNTER_RESETED:
            return Object.assign({}, state, {counter: 0, progress: false});

        default:
            return state;
    }
};

export {counterReducer}