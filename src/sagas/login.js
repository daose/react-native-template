import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { reset } from 'redux-form';
import { call, takeLatest, put } from 'redux-saga/effects';

function* login(action) {
  const { data, resolve } = action;
  Alert.alert('You Entered', JSON.stringify(data), [{ text: 'Ok' }]);
  yield put(reset('login'));
  yield put(NavigationActions.navigate({ routeName: 'Reddit' }));
  yield call(resolve);
}

export function* watchLoginAsync() {
  yield takeLatest('LOGIN', login);
}
