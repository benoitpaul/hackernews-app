import { createAction } from './Utilities';
import * as types from './news/types';

export const actions = {
  getStories: () => createAction(types.GET_NEWS_STORIES_ASYNC.PENDING),
  getStoriesSuccess: (stories) => createAction(types.GET_NEWS_STORIES_ASYNC.SUCCESS, { stories }),
  getStoriesError: (error) => createAction(types.GET_NEWS_STORIES_ASYNC.ERROR, { error }),

  getComments: (story) => createAction(types.GET_STORY_COMMENTS_ASYNC.PENDING, {story }),
  getCommentsSuccess: (story, comments) => createAction(types.GET_STORY_COMMENTS_ASYNC.SUCCESS, { story, comments} ),
  getCommentsError: (error) => createAction(types.GET_STORY_COMMENTS_ASYNC.ERROR, { error })
}