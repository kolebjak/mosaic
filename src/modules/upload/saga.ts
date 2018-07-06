import { takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { UPLOAD_IMAGE } from './constants';
import { UploadImageActionResponse } from './actions';
import { readAsDataURL } from '../utils';
import { setPreviewImageSrcAction } from '../preview/actions';
import { push } from 'react-router-redux';
import { Routes } from '../routes';

export function* uploadImage(action: UploadImageActionResponse): SagaIterator {
  try {
    const { image } = action;
    const result = yield call(readAsDataURL, image);
    if (result) {
      yield put(setPreviewImageSrcAction(result));
      yield put(push(Routes.preview));
    }
  } catch (e) {
    console.error(e.message);
  }
}
function* saga(): SagaIterator {
  yield takeLatest(UPLOAD_IMAGE, uploadImage);
}
export default saga;
