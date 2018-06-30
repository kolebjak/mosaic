import { SET_ORIGINAL_IMAGE } from './constants';

export type SetOriginalImageAction = (originalImage: string) => SetOriginalImageActionResponse;
export type SetOriginalImageActionResponse = {
  type: SET_ORIGINAL_IMAGE,
  originalImage: string,
};

export const setOriginalImageAction: SetOriginalImageAction = (originalImage: string) => ({
  type: SET_ORIGINAL_IMAGE,
  originalImage,
});

export type Action = SetOriginalImageActionResponse;
