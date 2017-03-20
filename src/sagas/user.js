import { takeLatest } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

function* login() {
  yield Actions.REDDIT();
}

export function* watchLoginAsync() {
  yield takeLatest('LOGIN', login);
}
