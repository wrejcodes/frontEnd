import { createSelector } from 'reselect';

/**
 * Direct selector to the entriesPage state domain
 */
const selectEntriesPageDomain = (state) => state.get('entriesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EntriesPage
 */

const makeSelectEntriesPage = () => createSelector(
  selectEntriesPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectEntriesPage;
export {
  selectEntriesPageDomain,
};
