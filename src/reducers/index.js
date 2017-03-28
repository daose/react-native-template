import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { navReducer } from '../Navigator';
import reddit from './reddit';

export default combineReducers({
  reddit,
  nav: navReducer,
  form: formReducer
});
