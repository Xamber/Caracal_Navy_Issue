import * as types from './constants'

// Действие: Увеличить счетчик
export function incCounter(payload) {
    return {
        type: types.INC_COUNTER,
        payload: payload
    };
}

// Действие: Уменьшить счетчик
export function decCounter(payload) {
    return {
        type: types.DEC_COUNTER,
        payload: payload
    };
}

// Действие: Обнулить счетчик
export function resetCounter(payload) {

    return function (dispatch, getState) {
        dispatch({type: types.RESET_COUNTER});

        setTimeout(function () {
            dispatch({type: types.COUNTER_RESETED});
        }, 1500)
    };
}

