import { createSelector } from 'reselect';

/**
 * Direct selector to the viewDbpage state domain
 */
const selectViewDbpageDomain = (state) => state.get('viewDbpage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ViewDbpage
 */

const makeSelectViewDbpage = () => createSelector(
  selectViewDbpageDomain,
  (substate) => substate.toJS()
);

export default makeSelectViewDbpage;
export {
  selectViewDbpageDomain,
};
