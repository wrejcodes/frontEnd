
import { fromJS } from 'immutable';
import viewDbpageReducer from '../reducer';

describe('viewDbpageReducer', () => {
  it('returns the initial state', () => {
    expect(viewDbpageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
