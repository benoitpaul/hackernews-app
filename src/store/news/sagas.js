import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './../News';
import * as types from './types';

import { fetchLatestStories } from './../../api.js';


function* getNewsStories() {
  try {
    const stories = yield call(fetchLatestStories);
    yield put(actions.success(stories.data));
  } catch (e) {
    console.log(e);
    yield put(actions.error(e));
  }
}

export default function* () {
  yield all([
    takeLatest(types.GET_NEWS_STORIES_ASYNC.PENDING, getNewsStories)
  ])
}