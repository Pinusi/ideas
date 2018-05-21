/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectLoading = () => createSelector(
  selectHome,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectHome,
  (globalState) => globalState.get('error')
);

const makeSelectIdeas = () => createSelector(
  selectHome,
  (globalState) => globalState.get('ideas')
);

const makeSelectAction = () => createSelector(
  selectHome,
  (globalState) => globalState.get('action')
);

const makeSelectFilter = () => createSelector(
  selectHome,
  (globalState) => globalState.get('filter')
);


export {
  makeSelectLoading,
  makeSelectError,
  makeSelectIdeas,
  makeSelectAction,
  makeSelectFilter,
};
