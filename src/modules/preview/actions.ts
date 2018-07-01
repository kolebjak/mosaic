import { SET_ORIGINAL_IMAGE, SET_MOSAIC, GENERATE_MOSAIC } from './constants';
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

export type GenerateMosaicAction = (imageData: ImageData, width: number, height: number) => GenerateMosaicActionResponse;
export type GenerateMosaicActionResponse = {
  type: GENERATE_MOSAIC,
  imageData: ImageData,
  width: number,
  height: number,
};

export const generateMosaicAction: GenerateMosaicAction = (imageData: ImageData, width: number, height: number) => ({
  type: GENERATE_MOSAIC,
  imageData,
  width,
  height,
});

export type Action = SetOriginalImageActionResponse | SetMosaicActionResponse | GenerateMosaicActionResponse;
