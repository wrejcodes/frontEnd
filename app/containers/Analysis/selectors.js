import { createSelector } from 'reselect';

/**
 * Direct selector to the analysis state domain
 */
const selectAnalysisDomain = (state) => state.get('analysis');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Analysis
 */

const makeSelectAnalysis = () => createSelector(
  selectAnalysisDomain,
  (substate) => substate.toJS()
);

export default makeSelectAnalysis;
export {
  selectAnalysisDomain,
};
