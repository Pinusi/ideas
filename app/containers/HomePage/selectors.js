/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectShare = (state) => state.get('home');

const makeSelectLoading = () => createSelector(
  selectShare,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectShare,
  (globalState) => globalState.get('error')
);

const makeSelectIdeas = () => createSelector(
  selectShare,
  (globalState) => globalState.get('ideas')
);


export {
  makeSelectLoading,
  makeSelectError,
  makeSelectIdeas,
};
