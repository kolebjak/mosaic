import { Mosaic, OriginalImage, State } from '../../types';
import { Action } from './actions';
import { SET_ORIGINAL_IMAGE, SET_MOSAIC, SET_MOSAIC_DIMENSIONS } from './constants';

export type Reducer = {
  originalImage?: OriginalImage,
  mosaic?: Mosaic,
  mosaicDimensions?: {
    width: number,
    height: number,
  }
};

const initialState: Reducer = {
  originalImage: undefined,
  mosaic: undefined,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ORIGINAL_IMAGE: {
      const { originalImage } = action;
      return {...state, originalImage };
    }
    case SET_MOSAIC: {
      const { mosaic } = action;
      return {...state, mosaic };
    }
    case SET_MOSAIC_DIMENSIONS: {
      const { height, width } = action;
      return {...state, mosaicDimensions: { height, width } };
    }
    default:
      return state;
  }
};

export const selectOriginalImage = (state: State) => state.previewReducer.originalImage;
export const selectMosaic = (state: State) => state.previewReducer.mosaic;
export const selectMosaicDimensions = (state: State) => state.previewReducer.mosaicDimensions;
