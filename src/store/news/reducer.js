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
        case types.GET_STORY_COMMENTS_ASYNC.SUCCESS:
          const index = state.stories.findIndex(s => s.id === action.story.id);
          return {
            ...state,
            stories: [ 
              ...state.stories.slice(0, index),
              Object.assign({}, state.stories[index], { isLoadingComments: false, comments: action.comments }),
              ...state.stories.slice(index+1)
            ]
          };
        default:
          return state;
      }
}