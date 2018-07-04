import { Gallery, State } from '../../types';
import { Action } from './actions';
import { SET_GALLERY, SET_LAST_LOADED_PAGE, SET_PAGE } from './constants';

export type Reducer = {
  gallery: Gallery,
  page: number,
  pageSize: number,
  lastLoadedPageNumber: number,
};

const initialState: Reducer = {
  gallery: [],
  page: 1,
  pageSize: 10,
  lastLoadedPageNumber: 0,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_GALLERY: {
      const { gallery } = action;
      return { ...state, gallery: [ ...state.gallery, ...gallery ] };
    }
    case SET_PAGE: {
      const { page } = action;
      return { ...state, page };
    }
    case SET_LAST_LOADED_PAGE: {
      const { lastLoadedPageNumber } = action;
      return { ...state, lastLoadedPageNumber };
    }
    default:
      return state;
  }
};

export const selectGallery = (state: State) => {
  const { page, pageSize } = state.galleryReducer;
  return state.galleryReducer.gallery.slice((page - 1) * pageSize, page * pageSize);
};
export const selectGallerySize = (state: State) => state.galleryReducer.gallery.length;
export const selectPage = (state: State) => state.galleryReducer.page;
export const selectPageSize = (state: State) => state.galleryReducer.pageSize;
export const selectLastLoadedPageNumber = (state: State) => state.galleryReducer.lastLoadedPageNumber;
