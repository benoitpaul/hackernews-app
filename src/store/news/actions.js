import * as types from './types';

export function loadBlogSuccess(stories) {
  return { 
      type: types.LOAD_NEWS_STORIES_SUCCESS, 
      stories
    };
}