import initialState from '../../store/initialState';
import * as types from './types';

export default function blogReducer(state = initialState.news, action) {
    switch (action.type) {
        case types.LOAD_NEWS_STORIES_SUCCESS:
            return {
                ...state,
                stories: action.stories
            }
        default:
            return state
    }
}