import { combineReducers } from 'redux';
import routesPaths from './routesPaths';
import formPlugin from './forms';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  routesPaths,
  form: form.plugin(formPlugin)
});

export default rootReducer;
