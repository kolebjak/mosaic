// import { State } from '../../types';
import { Action } from './actions';
// import { SET_IMAGE } from './constants';

export type Reducer = {};

const initialState: Reducer = {};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    // case SET_IMAGE: {
    //   const { imageSrc } = action;
    //   return {...state, imageSrc };
    // }
    default:
      return state;
  }
};

// export const selectImageSrc = (state: State) => {
//   return state.uploadPageReducer.imageSrc;
// };
