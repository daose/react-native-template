import { watchHotListAsync } from './reddit';
import { watchLoginAsync } from './login';

export default function* rootSaga() {
  yield [
    watchHotListAsync(),
    watchLoginAsync()
  ];
}

