import { RouterState } from 'react-router-redux';
import { Reducer as UploadReducer } from './modules/upload/reducer';
import { Reducer as PreviewReducer } from './modules/preview/reducer';

export type State = {
  routerReducer: RouterState,
  uploadReducer: UploadReducer,
  previewReducer: PreviewReducer,
};

export type OriginalImage = {
  source: string,
  file: File,
};

export type Rgb = {
  red: number;
  green: number;
  blue: number;
};

export type Mosaic = Array<Array<Rgb>>;
