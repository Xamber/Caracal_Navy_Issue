import fetch from 'isomorphic-fetch'
import * as types from './constants'

// Событие: прибыли новые новости
export function arrivalNewNews(payload) {
    return {
        type: types.GETTING_NEWS_END,
        payload: payload
    };
}

// Действие: Загрузить новые новости
export function getMoreNews() {

    return function (dispatch, getState) {
        dispatch({type: types.GETTING_NEWS_BEGIN});

        let newsCount = getState().news.list.length;

        fetch("https://api.vk.com/method/wall.get?domain=zenit_spb&count=3&filter=owner&v=5.60&offset=" + newsCount)
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                dispatch(arrivalNewNews(json.response.items));
            })
            .catch(function (error) {
                console.error(error)
            });

    };
}

