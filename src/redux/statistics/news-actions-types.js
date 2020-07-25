import axios from 'axios';
import { NEWS_SEND_REQUEST, NEWS_SUCCESS_REQUEST, NEWS_FAILED_REQUEST, NEWS_NEXT_PAGE, NEWS_PREVIOUS_PAGE, NEW_HIDE_ACTION, NEWS_INCREMENT_VOTE } from './news-actions';
import httpApi from '../../utils/api.json';


export function sendNewsRequest() {
    return {
        type: NEWS_SEND_REQUEST
    }
}

export function successNewsRequest(newsData) {
    return {
        type: NEWS_SUCCESS_REQUEST,
        payload: newsData
    }
}

export function failedNewsRequest(errorMsg) {
    return {
        type: NEWS_FAILED_REQUEST,
        payload: errorMsg
    }
}

export function nextPageData() {
    return {
        type: NEWS_NEXT_PAGE
    }
}
export function previousPageData() {
    return {
        type: NEWS_PREVIOUS_PAGE
    }
}

export function hide(data) {
    return {
        type: NEW_HIDE_ACTION,
        payload: data
    }
}

export function incrementVote(data) {
    return {
        type: NEWS_INCREMENT_VOTE,
        payload: data
    }
}


//getFetch

export function getNewsData(page) {
    return function (dispatch) {
        dispatch(sendNewsRequest())
        axios.get(`${httpApi['base-api']}?page=${page}`).then((response) => {
            const { data } = response;
            data['hits'].map((value) => value.points = Math.floor(Math.random() * 10));
            dispatch(successNewsRequest(data['hits']));
        }).catch(error => {
            dispatch(failedNewsRequest(error.message));
        })
    }
}
