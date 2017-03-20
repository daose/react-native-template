import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reddit from './reddit';

export default combineReducers({
  reddit,
  form: formReducer
});
