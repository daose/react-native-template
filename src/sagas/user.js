import { Alert } from 'react-native';
import { call, takeLatest } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

function* login(action) {
  const { data, resolve } = action;
  Alert.alert('You Entered', JSON.stringify(data), [{ text: 'Ok' }]);
  yield call(resolve);
  yield Actions.REDDIT();
}

export function* watchLoginAsync() {
  yield takeLatest('LOGIN', login);
}
