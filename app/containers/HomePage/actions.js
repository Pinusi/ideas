/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  IDEAS_ERROR,
  GET_IDEAS,
  GET_IDEAS_DONE,
  POST_IDEA,
  POST_IDEA_DONE,
  PUT_IDEA,
  PUT_IDEA_DONE,
  DELETE_IDEA,
  DELETE_IDEA_DONE,
  FILTER_IDEAS,
} from './constants';


/**
 * We got and error in getting the shared collection
 *
 * @param  {object} error The error
 *
 * @return {object}    An action object with a type of IDEAS_ERROR passing the error
 */
export function ideasError(error) {
  return {
    type: IDEAS_ERROR,
    error,
  };
}


/**
 * Get the list of all ideas
 *
 * @return {object}    An action object with a type of GET_IDEAS
 */
export function getIdeas() {
  return {
    type: GET_IDEAS,
  };
}


/**
 * Aideas are loaded
 *
 * @param  {object} ideas The object of the ideas
 *
 * @return {object}    An action object with a type of GET_IDEAS_DONE
 */
export function getIdeasDone(ideas) {
  return {
    type: GET_IDEAS_DONE,
    ideas,
  };
}


/**
 * Put an idea
 *
 * @param  {payload} payload The new idea data to be stored
 *
 * @return {object}    An action object with a type of PUT_IDEA
 */
export function putIdea(payload) {
  return {
    type: PUT_IDEA,
    payload,
  };
}


/**
 * Put an idea
 *
 * @return {object}    An action object with a type of PUT_IDEA_DONE
 */
export function putIdeaDone(updated) {
  return {
    type: PUT_IDEA_DONE,
    updated,
  };
}


/**
 * Delete an idea
 *
 * @param  {id} id The id of the idea
 *
 * @return {object}    An action object with a type of DELETE_IDEA
 */
export function deleteIdea(id) {
  return {
    type: DELETE_IDEA,
    id,
  };
}


/**
 * Put an idea
 *
 * @param  {deleted} object with id of the idea deleted
 *
 * @return {object}    An action object with a type of PUT_IDEA_DONE
 */
export function deleteIdeaDone(deleted) {
  return {
    type: DELETE_IDEA_DONE,
    deleted,
  };
}


/**
 * Post an idea
 *
 * @return {object}    An action object with a type of POST_IDEA
 */
export function postIdea() {
  return {
    type: POST_IDEA,
  };
}


/**
 * Put an idea
 *
 * @param  {newIdea} object with id and creation date of the new idea
 *
 * @return {object}    An action object with a type of POST_IDEA_DONE
 */
export function postIdeaDone(newIdea) {
  return {
    type: POST_IDEA_DONE,
    newIdea,
  };
}

/**
 * Post an idea
 *
 * @param  {filter} string of the filter label
 *
 * @return {object}    An action object with a type of POST_IDEA
 */
export function filterIdeas(filter) {
  return {
    type: FILTER_IDEAS,
    filter,
  };
}
