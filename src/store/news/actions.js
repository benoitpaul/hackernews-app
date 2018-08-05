import * as types from './types';

export function loadBlogSuccess(stories) {
  return { 
      type: types.LOAD_NEWS_STORIES_SUCCESS, 
      stories
    };
}

export function loadStoryCommentsSuccess(story, comments) {
  return { 
      type: types.LOAD_STORY_COMMENTS_SUCCESS, 
      story, 
      comments
    };
}