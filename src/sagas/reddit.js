import { call, put, takeLatest } from 'redux-saga/effects';
import Reddit from '../api/Reddit';

function* fetchHotList() {
  try {
    const response = yield call(Reddit.fetchHotList);
    console.log(response);
  } catch (err) {
  }
  yield put({ type: 'SET_HOT_LIST', data: 'hi' });
}

export function* watchHotListAsync() {
  yield takeLatest('FETCH_HOT_LIST', fetchHotList);
}
