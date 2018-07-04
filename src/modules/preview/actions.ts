import { SET_PREVIEW_IMAGE_SRC, SHARE_IMAGE, SET_SHARED_IMAGE, SET_IS_LOADING } from './constants';
import { Image } from '../../types';

export type SetPreviewImageSrcAction = (previewImageSrc: string) => SetPreviewImageSrcActionResponse;
export type SetPreviewImageSrcActionResponse = {
  type: SET_PREVIEW_IMAGE_SRC,
  previewImageSrc: string,
};

export const setPreviewImageSrcAction: SetPreviewImageSrcAction = (previewImageSrc: string) => ({
  type: SET_PREVIEW_IMAGE_SRC,
  previewImageSrc,
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

export type SetIsLoadingAction = (isLoading: boolean) => SetIsLoadingActionResponse;
export type SetIsLoadingActionResponse = {
  type: SET_IS_LOADING,
  isLoading: boolean,
};

export const setIsLoadingAction: SetIsLoadingAction = (isLoading: boolean) => ({
  type: SET_IS_LOADING,
  isLoading,
});

export type Action = SetPreviewImageSrcActionResponse | ShareImageActionResponse | SetSharedImageActionResponse | SetIsLoadingActionResponse;
