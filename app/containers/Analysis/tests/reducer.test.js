
import { fromJS } from 'immutable';
import analysisReducer from '../reducer';

describe('analysisReducer', () => {
  it('returns the initial state', () => {
    expect(analysisReducer(undefined, {})).toEqual(fromJS({}));
  });
});
