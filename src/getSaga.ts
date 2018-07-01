import { fork } from 'redux-saga/effects';
import uploadSaga from './modules/upload/saga';
import previewSaga from './modules/preview/saga';

export default () => function* rootSaga() {
  const sagas = [
    yield fork(uploadSaga),
    yield fork(previewSaga),
  ];
  yield sagas;
};
