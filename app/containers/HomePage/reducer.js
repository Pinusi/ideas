/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  IDEAS_ERROR,
  GET_IDEAS,
  GET_IDEAS_DONE,
  PUT_IDEA,
  PUT_IDEA_DONE,
  DELETE_IDEA,
  DELETE_IDEA_DONE,
  POST_IDEA,
  POST_IDEA_DONE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  ideas: [],
  loading: false,
  action: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IDEAS:
      return state
        .set('loading', true)
        .set('action', '')
        .set('error', false);
    case GET_IDEAS_DONE:
      return state
        .set('loading', false)
        .set('action', 'loaded')
        .set('ideas', action.ideas);
    case PUT_IDEA:
      return state
        .set('loading', true)
        .set('action', '')
        .set('error', false);
    case PUT_IDEA_DONE:
      return state
        .set('loading', false)
        .set('action', 'modified');
    case DELETE_IDEA:
      return state
        .set('loading', true)
        .set('action', '')
        .set('error', false);
    case DELETE_IDEA_DONE:
      return state
        .set('ideas', state.get('ideas').filter((idea) => idea.id !== action.deleted.id))
        .set('action', 'deleted')
        .set('loading', false);
    case POST_IDEA:
      return state
        .set('loading', true)
        .set('action', '')
        .set('error', false);
    case POST_IDEA_DONE:
      return state
        .update('ideas', (ideas) => ideas.concat(action.newIdea))
        .set('action', 'new')
        .set('loading', false);
    case IDEAS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
