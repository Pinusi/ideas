/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_IDEAS, PUT_IDEA, DELETE_IDEA, POST_IDEA } from 'containers/HomePage/constants';
import { getIdeasDone, ideasError, putIdeaDone, deleteIdeaDone, getIdeas, postIdeaDone } from 'containers/HomePage/actions';

import request from 'utils/request';

/**
 * Get ideas
 */
export function* getIdeasSaga() {
  const requestURL = `${process.env.API_URL}/ideas/`;

  try {
    // Call our request helper (see 'utils/request')
    const ideas = yield call(request, requestURL);
    yield put(getIdeasDone(ideas));
  } catch (err) {
    yield put(ideasError(err));
  }
}


/**
 * Put idea
 */
export function* putIdeaSaga(action) {
  const requestURL = `${process.env.API_URL}/ideas/${action.payload.id}`;

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.payload),
    });
    yield put(putIdeaDone());
  } catch (err) {
    yield put(ideasError(err));
  }
}


/**
 * Delete idea
 */
export function* deleteIdeaSaga(action) {
  const requestURL = `${process.env.API_URL}/ideas/${action.id}`;

  try {
    // Call our request helper (see 'utils/request')
    const deleted = yield call(request, requestURL, {
      method: 'DELETE',
    });
    yield put(deleteIdeaDone(deleted));
    yield put(getIdeas()); // to be removed with real API
  } catch (err) {
    yield put(ideasError(err));
  }
}


/**
* Post idea
*/
export function* postIdeaSaga() {
  const requestURL = `${process.env.API_URL}/ideas/`;

  try {
    // Call our request helper (see 'utils/request')
    const newIdea = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        created_date: Date.now(),
      }),
    });
    yield put(postIdeaDone(newIdea));
    // yield put(getIdeas());
  } catch (err) {
    yield put(ideasError(err));
  }
}


/**
 * Root saga manages watcher lifecycle
 */
export default function* ideasData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_IDEAS, getIdeasSaga);
  yield takeLatest(PUT_IDEA, putIdeaSaga);
  yield takeLatest(DELETE_IDEA, deleteIdeaSaga);
  yield takeLatest(POST_IDEA, postIdeaSaga);
}
