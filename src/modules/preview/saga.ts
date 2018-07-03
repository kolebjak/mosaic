import { takeLatest, put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GENERATE_MOSAIC, SHARE_IMAGE } from './constants';
import {
  GenerateMosaicActionResponse,
  setMosaicAction,
  setSharedImageAction,
  ShareImageActionResponse
} from './actions';
import { Mosaic, MosaicData } from '../../types';
import { postImage } from '../fetcher';
import { isResponseSuccessfull } from '../utils';

function* generateMosaic(action: GenerateMosaicActionResponse): SagaIterator {
  try {
    const { imageData, width, height } = action;

    const data = imageData.data;
    let mosaicData: MosaicData = [];

    for (let i = 0; i < data.length; i += 4) {

      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];
      const pixelNumber = i / 4;

      const colNumber = pixelNumber % width;
      const rowNumber = Math.floor(pixelNumber / width);

      const squareColNumber = Math.floor(colNumber / 16);
      const squareRowNumber = Math.floor(rowNumber / 16);

      if (!mosaicData[squareRowNumber]) {
        mosaicData[squareRowNumber] = [];
      }

      if (mosaicData[squareRowNumber][squareColNumber]) {
        mosaicData[squareRowNumber][squareColNumber].red += red;
        mosaicData[squareRowNumber][squareColNumber].green += green;
        mosaicData[squareRowNumber][squareColNumber].blue += blue;
      } else {
        mosaicData[squareRowNumber][squareColNumber] = { red, green, blue };
      }
    }

    const mosaic: Mosaic = {
      data: mosaicData,
      width,
      height,
    };

    yield put(setMosaicAction(mosaic));
  } catch (e) {
    console.error(e.message);
  }
}

function* shareImage(action: ShareImageActionResponse): SagaIterator {
  try {
    const response = yield call(postImage, action.base64Image);
    if (isResponseSuccessfull(response)) {
      yield put(setSharedImageAction(response.data));
    }
  } catch (e) {
    console.error(e.message);
  }
}

function* saga(): SagaIterator {
  yield takeLatest(GENERATE_MOSAIC, generateMosaic);
  yield takeLatest(SHARE_IMAGE, shareImage);
}

export default saga;
