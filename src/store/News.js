import { createAction } from './Utilities';
import * as types from './news/types';

export const actions = {
  pending: () => createAction(types.GET_NEWS_STORIES_ASYNC.PENDING),
  success: (stories) => createAction(types.GET_NEWS_STORIES_ASYNC.SUCCESS, { stories }),
  error: (error) => createAction(types.GET_NEWS_STORIES_ASYNC.ERROR, { error })
}