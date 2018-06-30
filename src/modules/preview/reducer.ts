import { State } from '../../types';
import { Action } from './actions';
import { SET_ORIGINAL_IMAGE } from './constants';

export type Reducer = {
  originalImage?: string,
};

const initialState: Reducer = {
  originalImage: undefined,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ORIGINAL_IMAGE: {
      const { originalImage } = action;
      return {...state, originalImage };
    }
    default:
      return state;
  }
};

export const selectOriginalImage = (state: State) => {
  return state.previewReducer.originalImage;
};
