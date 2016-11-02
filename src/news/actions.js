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

    console.log("Action called: new news");
    return function (dispatch) {
        dispatch({type: types.GETTING_NEWS_BEGIN});

        fetch("https://api.vk.com/method/photos.get?owner_id=-105201145&album_id=222672031&count=100&v=5.52")
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                dispatch(arrivalNewNews(json.response.items));
            })
            .catch(function (error) {
                console.log(error)
            })
    };
}

