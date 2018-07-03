import { SET_ORIGINAL_IMAGE, SET_MOSAIC, GENERATE_MOSAIC, SHARE_IMAGE, SET_SHARED_IMAGE } from './constants';
import { Image, Mosaic, OriginalImage } from '../../types';

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

export type ShareImageAction = (base64Image: string) => ShareImageActionResponse;
export type ShareImageActionResponse = {
  type: SHARE_IMAGE,
  base64Image: string,
};

export const shareImageAction: ShareImageAction = (base64Image: string) => ({
  type: SHARE_IMAGE,
  base64Image,
});

export type SetSharedImageAction = (sharedImage: Image) => SetSharedImageActionResponse;
export type SetSharedImageActionResponse = {
  type: SET_SHARED_IMAGE,
  sharedImage: Image,
};

export const setSharedImageAction: SetSharedImageAction = (sharedImage: Image) => ({
  type: SET_SHARED_IMAGE,
  sharedImage,
});

export type Action = SetOriginalImageActionResponse | SetMosaicActionResponse | GenerateMosaicActionResponse | ShareImageActionResponse | SetSharedImageActionResponse;
