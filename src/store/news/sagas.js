import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './../News';
import * as types from './types';

import { fetchLatestStories, fetchStoriesById, fetchCommentsByStory } from './../../api.js';


function* getNewsStories() {
  try {
    const ids = yield call(fetchLatestStories);
    const stories = yield call(fetchStoriesById, ids);
    console.log(stories);
    yield put(actions.getStoriesSuccess(stories));
  } catch (e) {
    console.log(e);
    yield put(actions.getStoriesError(e));
  }
}

function* getStoryComments(args) {
  try {
    const comments = yield call(fetchCommentsByStory, args.story);
    console.log(comments);
    yield put(actions.getCommentsSuccess(args.story, comments));
  } catch (e) {
    console.log(e);
    yield put(actions.getCommentsError(e));
  }
}

export default function* () {
  yield all([
    takeLatest(types.GET_NEWS_STORIES_ASYNC.PENDING, getNewsStories),
    takeLatest(types.GET_STORY_COMMENTS_ASYNC.PENDING, getStoryComments)
  ])
}