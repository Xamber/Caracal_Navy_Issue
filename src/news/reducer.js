import * as types from './constants'

var newsReducer = function (state = {}, action) {
    switch (action.type) {

        case types.GETTING_NEWS_BEGIN:
            return Object.assign({}, state, {progress: true});

        case types.GETTING_NEWS_END:
            return Object.assign({}, state, {list: state.list.concat(action.payload), progress: false});

        default:
            return state;
    }
};

export default newsReducer