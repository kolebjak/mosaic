import { takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { UPLOAD_IMAGE } from './constants';
import { UploadImageActionResponse } from './actions';
import { readAsDataURL } from '../utils';
import { setOriginalImageAction } from '../preview/actions';
import { push } from 'react-router-redux';
import { Routes } from '../routes';
import { OriginalImage } from '../../types';

function* uploadImage(action: UploadImageActionResponse): SagaIterator {
  try {
    const { image } = action;
    const result = yield call(readAsDataURL, image);
    if (result) {
      const originalImage: OriginalImage = { source: result, file: image };
      yield put(setOriginalImageAction(originalImage));
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
