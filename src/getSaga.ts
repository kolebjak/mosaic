import { fork } from 'redux-saga/effects';
import uploadSaga from './modules/upload/saga';

export default () => function* rootSaga() {
  const sagas = [
    yield fork(uploadSaga),
  ];
  yield sagas;
};
