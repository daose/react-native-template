import { Alert } from 'react-native';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import Reddit from '../api/Reddit';

function* fetchHotList() {
  try {
    const hotList = yield call(Reddit.fetchHotList);
    yield put({ type: 'SET_HOT_LIST', data: hotList });
  } catch (err) {
    Alert.alert('Error', 'Try again later', [{ text: 'Close', onPress: Actions.LOGIN }]);
  }
}

export function* watchHotListAsync() {
  yield takeLatest('FETCH_HOT_LIST', fetchHotList);
}
