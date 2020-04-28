import {
  SET_PAGE,
  FETCH_GALLERY,
  SELECT_IMAGE,
  SET_GALLERY,
  SET_LAST_LOADED_PAGE,
  SET_GALLERY_IS_LOADING
} from './constants';

export type SetGalleryAction = (gallery: object[]) => SetGalleryActionResponse;
export type SetGalleryActionResponse = {
  type: SET_GALLERY,
  gallery: object[],
};

export const setGalleryAction: SetGalleryAction = (gallery) => ({
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

export const selectImageAction: SelectImageAction = (imageUrl) => ({
  type: SELECT_IMAGE,
  imageUrl,
});

export type SetPageAction = (page: number) => SetPageActionResponse;
export type SetPageActionResponse = {
  type: SET_PAGE,
  page: number,
};

export const setPageAction: SetPageAction = (page) => ({
  type: SET_PAGE,
  page,
});

export type SetLastLoadedPageNumberAction = (lastLoadedPageNumber: number) => SetLastLoadedPageNumberActionResponse;
export type SetLastLoadedPageNumberActionResponse = {
  type: SET_LAST_LOADED_PAGE,
  lastLoadedPageNumber: number,
};

export const setLastLoadedPageNumberAction: SetLastLoadedPageNumberAction = (lastLoadedPageNumber) => ({
  type: SET_LAST_LOADED_PAGE,
  lastLoadedPageNumber,
});

export type SetGalleryIsLoadingAction = (isLoading: boolean) => SetGalleryIsLoadingActionResponse;
export type SetGalleryIsLoadingActionResponse = {
  type: SET_GALLERY_IS_LOADING,
  isLoading: boolean,
};

export const setGalleryIsLoadingAction: SetGalleryIsLoadingAction = (isLoading) => ({
  type: SET_GALLERY_IS_LOADING,
  isLoading,
});


export type Action = SetGalleryActionResponse | FetchGalleryActionResponse | SelectImageActionResponse | SetPageActionResponse | SetLastLoadedPageNumberActionResponse | SetGalleryIsLoadingActionResponse;
