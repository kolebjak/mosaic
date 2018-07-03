import { Image, Mosaic, OriginalImage, State } from '../../types';
import { Action } from './actions';
import { SET_ORIGINAL_IMAGE, SET_MOSAIC, SET_SHARED_IMAGE } from './constants';

export type Reducer = {
  originalImage?: OriginalImage,
  mosaic?: Mosaic,
  sharedImage?: Image,
};

const initialState: Reducer = {
  originalImage: undefined,
  mosaic: undefined,
  sharedImage: undefined,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ORIGINAL_IMAGE: {
      const { originalImage } = action;
      return {...state, originalImage, mosaic: undefined, sharedImage: undefined };
    }
    case SET_MOSAIC: {
      const { mosaic } = action;
      return {...state, mosaic };
    }
    case SET_SHARED_IMAGE: {
      const { sharedImage } = action;
      return {...state, sharedImage };
    }
    default:
      return state;
  }
};

export const selectOriginalImage = (state: State) => state.previewReducer.originalImage;
export const selectMosaic = (state: State) => state.previewReducer.mosaic;
export const selectSharedImage = (state: State) => state.previewReducer.sharedImage;
