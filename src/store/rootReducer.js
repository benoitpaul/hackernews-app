import { combineReducers } from 'redux';
import news from './news/reducer'

export const rootReducer = combineReducers({
    news
})