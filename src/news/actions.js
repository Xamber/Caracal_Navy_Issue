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

    return function (dispatch) {
        dispatch({type: types.GETTING_NEWS_BEGIN});

        // fetch("https://api.vk.com/method/photos.get?owner_id=-105201145&album_id=222672031&count=100&v=5.52")
        //     .then(function (response) {
        //         return response.json()
        //     })
        //     .then(function (json) {
        //         dispatch(arrivalNewNews(json.response.items));
        //     })
        //     .catch(function (error) {
        //         console.error(error)
        //     })

        setTimeout(function () {
            dispatch(arrivalNewNews([
            {
                id: 5,
                head: 'News 4',
                img: 'http://www.mountainguides.com/photos/everest-south/upper-mountain-shadow_jm.jpg',
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti minus nesciunt nihil praesentium. Accusamus animi assumenda beatae dolorum eius ipsa neque quidem similique? Aliquam doloribus modi quas. Accusantium commodi dignissimos, eius hic id perferendis quas saepe sapiente suscipit veniam.",
            },
            {
                id: 6,
                head: 'News 5',
                img: 'http://www.mountainguides.com/photos/everest-south/upper-mountain-shadow_jm.jpg',
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti minus nesciunt nihil praesentium. Accusamus animi assumenda beatae dolorum eius ipsa neque quidem similique? Aliquam doloribus modi quas. Accusantium commodi dignissimos, eius hic id perferendis quas saepe sapiente suscipit veniam.",
            },
            {
                id: 7,
                head: 'News 6',
                img: 'http://www.mountainguides.com/photos/everest-south/upper-mountain-shadow_jm.jpg',
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti minus nesciunt nihil praesentium. Accusamus animi assumenda beatae dolorum eius ipsa neque quidem similique? Aliquam doloribus modi quas. Accusantium commodi dignissimos, eius hic id perferendis quas saepe sapiente suscipit veniam.",
            },
        ]));
        }, 2000)

    };
}

