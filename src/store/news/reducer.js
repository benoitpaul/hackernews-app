import initialState from '../../store/initialState';
import * as types from './types';

export default function blogReducer(state = initialState.news, action) {
    switch (action.type) {
        case types.GET_NEWS_STORIES_ASYNC.PENDING:
          return {
            ...state,
            loading: true
          };
        case types.GET_NEWS_STORIES_ASYNC.SUCCESS:
          return {
            ...state,
            stories: action.stories,
            loading: false
          };
        case types.GET_NEWS_STORIES_ASYNC.ERROR:
          return {
            ...state,
            loading: false
          };
        default:
          return state;
      }
}