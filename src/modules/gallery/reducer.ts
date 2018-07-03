import { Gallery, State } from '../../types';
import { Action } from './actions';
import { SET_GALLERY } from './constants';

export type Reducer = {
  gallery: Gallery,
};

const initialState: Reducer = {
  gallery: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_GALLERY: {
      const { gallery } = action;
      return { ...state, gallery };
    }
    default:
      return state;
  }
};

export const selectGallery = (state: State) => state.galleryReducer.gallery.slice(0, 10);
