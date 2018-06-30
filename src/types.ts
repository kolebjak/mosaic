import { RouterState } from 'react-router-redux';
import { Reducer as UploadReducer } from './modules/upload/reducer';
import { Reducer as PreviewReducer } from './modules/preview/reducer';

export type State = {
  routerReducer: RouterState,
  uploadReducer: UploadReducer,
  previewReducer: PreviewReducer,
};
