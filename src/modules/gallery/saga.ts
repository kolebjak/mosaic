import { takeLatest, call, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { fetchGallery } from '../fetcher';
import { FETCH_GALLERY, SELECT_IMAGE, SET_PAGE } from './constants';
import {
  fetchGalleryAction,
  SelectImageActionResponse,
  setGalleryAction,
  setLastLoadedPageNumberAction,
  SetPageActionResponse
} from './actions';
import { isResponseSuccessfull } from '../utils';
import { Image } from '../../types';
import { Routes } from '../routes';
import { push } from 'connected-react-router';
import { setPreviewImageSrcAction } from '../preview/actions';
import { selectGallerySize, selectLastLoadedPageNumber, selectPageSize } from './reducer';

function* fetch(): SagaIterator {
  try {
    /** fetch gallery */
    const lastLoadedPage = yield select(selectLastLoadedPageNumber);
    const currentPage = lastLoadedPage + 1;
    const response = yield call(fetchGallery, currentPage);
    if (isResponseSuccessfull(response)) {
      /** Set last loaded imgur page */
      yield put(setLastLoadedPageNumberAction(currentPage));
      /** filter not animated */
      const gallery = response.data.filter((image: Image) => !image.animated);
      /** set to state */
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

function* setPage(action: SetPageActionResponse): SagaIterator {
  try {
    const { page } = action;
    const gallerySize = yield select(selectGallerySize);
    const pageSize = yield select(selectPageSize);
    if (gallerySize <= (page * pageSize)) {
      yield put(fetchGalleryAction());
    }

  } catch (e) {
    console.error(e.message);
  }
}

function* saga(): SagaIterator {
  yield takeLatest(FETCH_GALLERY, fetch);
  yield takeLatest(SELECT_IMAGE, selectImage);
  yield takeLatest(SET_PAGE, setPage);
}

export default saga;
