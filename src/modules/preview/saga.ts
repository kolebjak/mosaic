import { takeLatest, put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { SHARE_IMAGE } from './constants';
import {
  setIsLoadingAction,
  setSharedImageAction,
  ShareImageActionResponse
} from './actions';
import { postImage } from '../fetcher';
import { isResponseSuccessfull } from '../utils';

function* shareImage(action: ShareImageActionResponse): SagaIterator {
  try {
    yield put(setIsLoadingAction(true));
    const response = yield call(postImage, action.base64Image);
    if (isResponseSuccessfull(response)) {
      yield put(setSharedImageAction(response.data));
    }
    yield put(setIsLoadingAction(false));
  } catch (e) {
    console.error(e.message);
  }
}

function* saga(): SagaIterator {
  yield takeLatest(SHARE_IMAGE, shareImage);
}

export default saga;
