import { Mosaic, OriginalImage, State } from '../../types';
import { Action } from './actions';
import { SET_ORIGINAL_IMAGE, SET_MOSAIC } from './constants';

export type Reducer = {
  originalImage?: OriginalImage,
  mosaic?: Mosaic,
};

const initialState: Reducer = {
  originalImage: undefined,
  mosaic: undefined,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ORIGINAL_IMAGE: {
      const { originalImage } = action;
      return {...state, originalImage, mosaic: undefined };
    }
    case SET_MOSAIC: {
      const { mosaic } = action;
      return {...state, mosaic };
    }
    default:
      return state;
  }
};

export const selectOriginalImage = (state: State) => state.previewReducer.originalImage;
export const selectMosaic = (state: State) => state.previewReducer.mosaic;
