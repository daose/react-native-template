import { watchHotListAsync } from './reddit';
import { watchLoginAsync } from './user';

export default function* rootSaga() {
  yield [
    watchHotListAsync(),
    watchLoginAsync()
  ];
}

