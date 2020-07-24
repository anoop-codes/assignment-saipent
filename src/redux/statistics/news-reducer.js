import { initialStateNews } from "./news-initial-state";
import { NEWS_SEND_REQUEST, NEWS_SUCCESS_REQUEST, NEWS_FAILED_REQUEST, NEWS_NEXT_PAGE, NEWS_PREVIOUS_PAGE, NEW_HIDE_ACTION, NEWS_INCREMENT_VOTE } from './news-actions';


export const newsReducer = (state = initialStateNews, action) => {
    switch (action.type) {
        case NEWS_SEND_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NEWS_SUCCESS_REQUEST:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case NEWS_FAILED_REQUEST:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }
        case NEWS_NEXT_PAGE: {
            return {
                ...state,
                page: state.page + 1
            }
        }

        case NEWS_PREVIOUS_PAGE: {
            return {
                ...state,
                page: state.page > 0 ? state.page - 1 : 0
            }
        }

        case NEW_HIDE_ACTION: {
            const cloneData = { ...state };

            const data = cloneData.data.filter(d => d.objectID !== action.payload.objectID)

            return {
                ...state,
                data
            }
        }

        case NEWS_INCREMENT_VOTE: {
            const cloneData = { ...state };

            const index = cloneData.data.findIndex(d => d.objectID === action.payload.objectID);
            cloneData.data[index]['points']++

            return {
                ...state,
                cloneData
            }
        }

        default:
            return state;
    }
}
