import { all, call } from 'redux-saga/effects';
import { todosSaga } from './modules/todos';

export default function* rootSaga() {
  yield all([call(todosSaga)]);
}
