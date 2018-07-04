import { takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { fetchGallery } from '../fetcher/';
import { FETCH_GALLERY, SELECT_IMAGE } from './constants';
import { SelectImageActionResponse, setGalleryAction } from './actions';
import { isResponseSuccessfull } from '../utils';
import { Image } from '../../types';
import { Routes } from '../routes';
import { push } from 'react-router-redux';
import { setPreviewImageSrcAction } from '../preview/actions';

function* fetch(): SagaIterator {
  try {
    // fetch gallery
    const response = yield call(fetchGallery, 1);
    if (isResponseSuccessfull(response)) {
      // filter not animated
      const gallery = response.data.filter((image: Image) => !image.animated);
      // set to state
      yield put(setGalleryAction(gallery));
    }
  } catch (e) {
    console.error(e.message);
  }
}

function* selectImage(action: SelectImageActionResponse): SagaIterator {
  try {
    yield put(setPreviewImageSrcAction(action.imageUrl));
    yield put(push(Routes.preview));
  } catch (e) {
    console.error(e.message);
  }
}

function* saga(): SagaIterator {
  yield takeLatest(FETCH_GALLERY, fetch);
  yield takeLatest(SELECT_IMAGE, selectImage);
}

export default saga;
