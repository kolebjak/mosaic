import { FETCH_GALLERY, SELECT_IMAGE, SET_GALLERY } from './constants';

export type SetGalleryAction = (gallery: object[]) => SetGalleryActionResponse;
export type SetGalleryActionResponse = {
  type: SET_GALLERY,
  gallery: object[],
};

export const setGalleryAction: SetGalleryAction = (gallery: object[]) => ({
  type: SET_GALLERY,
  gallery,
});

export type FetchGalleryAction = () => FetchGalleryActionResponse;
export type FetchGalleryActionResponse = {
  type: FETCH_GALLERY,
};

export const fetchGalleryAction: FetchGalleryAction = () => ({
  type: FETCH_GALLERY,
});

export type SelectImageAction = (imageUrl: string) => SelectImageActionResponse;
export type SelectImageActionResponse = {
  type: SELECT_IMAGE,
  imageUrl: string,
};

export const selectImageAction: SelectImageAction = (imageUrl: string) => ({
  type: SELECT_IMAGE,
  imageUrl,
});

export type Action = SetGalleryActionResponse | FetchGalleryActionResponse | SelectImageActionResponse;
