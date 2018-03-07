/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const SCHEMAS = {
  blank: [],
  login: [
    { type: 'text', name: ' Username' },
    { type: 'password', name: ' Password' },
  ],
  registration: [
    { type: 'email', name: ' Email' },
    { type: 'text', name: ' Username' },
    { type: 'password', name: ' Password' },
    { type: 'password', name: ' Confirm Password' },
  ],
  target: [
    { type: 'text', name: ' Target Name' },
    { type: 'number', name: ' Target ID' },
  ],
  experiment: [
    { type: 'text', name: ' Experiment Name' },
    { type: 'number', name: ' Experiment ID' },
  ],
  chemical: [
    { type: 'text', name: ' Chemical Name' },
    { type: 'number', name: ' Chemical ID' },
  ],
};
