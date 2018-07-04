import * as React from 'react';
import { takeLatest, put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GENERATE_MOSAIC, SHARE_IMAGE } from './constants';
import {
  GenerateMosaicActionResponse, setIsLoadingAction, setPreviewImageSrcAction,
  setSharedImageAction,
  ShareImageActionResponse
} from './actions';
import { postImage } from '../fetcher';
import { isResponseSuccessfull } from '../utils';
import Mosaic from './components/Mosaic';
import { renderToStaticMarkup } from 'react-dom/server';
import { MosaicData } from '../../types';

const getMosaicData = async (imageData: ImageData, width: number) => new Promise((resolve) => {
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

  resolve(mosaicData);
});

function* generateMosaic(action: GenerateMosaicActionResponse): SagaIterator {
  try {

    yield put(setIsLoadingAction(true));
    const { imageData } = action;
    const { width, height } = imageData;
    const mosaicData = yield call(getMosaicData, imageData, width);

    const mosaicImageData = {
      data: mosaicData,
      width,
      height,
    };

    /** Convert SVG to base64 */
    const base64 = btoa(renderToStaticMarkup(React.createElement(Mosaic, { mosaic: mosaicImageData })));
    /** Prepend data information to create uri */
    const dataUri = `data:image/svg+xml;base64,${base64}`;
    /** Set into canvas */
    yield put(setPreviewImageSrcAction(dataUri));
    yield put(setIsLoadingAction(false));

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
