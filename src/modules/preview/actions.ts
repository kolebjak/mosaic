import { SET_ORIGINAL_IMAGE, SET_MOSAIC, SET_MOSAIC_DIMENSIONS } from './constants';
import { Mosaic, OriginalImage } from '../../types';

export type SetOriginalImageAction = (originalImage: OriginalImage) => SetOriginalImageActionResponse;
export type SetOriginalImageActionResponse = {
  type: SET_ORIGINAL_IMAGE,
  originalImage: OriginalImage,
};

export const setOriginalImageAction: SetOriginalImageAction = (originalImage: OriginalImage) => ({
  type: SET_ORIGINAL_IMAGE,
  originalImage,
});

export type SetMosaicAction = (mosaic: Mosaic) => SetMosaicActionResponse;
export type SetMosaicActionResponse = {
  type: SET_MOSAIC,
  mosaic: Mosaic,
};

export const setMosaicAction: SetMosaicAction = (mosaic: Mosaic) => ({
  type: SET_MOSAIC,
  mosaic,
});

export type SetMosaicDimensionsAction = (width: number, height: number) => SetMosaicDimensionsActionResponse;
export type SetMosaicDimensionsActionResponse = {
  type: SET_MOSAIC_DIMENSIONS,
  width: number,
  height: number,
};

export const setMosaicDimensionsAction: SetMosaicDimensionsAction = (width: number, height: number) => ({
  type: SET_MOSAIC_DIMENSIONS,
  width,
  height
});

export type Action = SetOriginalImageActionResponse | SetMosaicActionResponse | SetMosaicDimensionsActionResponse;
