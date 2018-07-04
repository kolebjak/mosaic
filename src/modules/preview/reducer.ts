import { Image, State } from '../../types';
import { Action } from './actions';
import { SET_PREVIEW_IMAGE_SRC, SET_SHARED_IMAGE, SET_IS_LOADING } from './constants';

export type Reducer = {
  previewImageSrc?: string,
  isLoading: boolean,
  sharedImage?: Image,
};

const initialState: Reducer = {
  previewImageSrc: undefined,
  isLoading: false,
  sharedImage: undefined,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_PREVIEW_IMAGE_SRC: {
      const { previewImageSrc } = action;
      return {...state, previewImageSrc, sharedImage: undefined };
    }
    case SET_IS_LOADING: {
      const { isLoading } = action;
      return {...state, isLoading };
    }
    case SET_SHARED_IMAGE: {
      const { sharedImage } = action;
      return {...state, sharedImage };
    }
    default:
      return state;
  }
};

export const selectPreviewImageSrc = (state: State) => state.previewReducer.previewImageSrc;
export const selectSharedImage = (state: State) => state.previewReducer.sharedImage;
export const selectIsLoading = (state: State) => state.previewReducer.isLoading;
