import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { newsReducer } from './statistics/news-reducer';
import { loadState, saveState } from '../common/localStorage';
import throttle from 'lodash.throttle';

const persistedState = loadState();

const rootReducer = combineReducers({
    newsData: newsReducer
});

export const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));
