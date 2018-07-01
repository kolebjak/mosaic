import { RouterState } from 'react-router-redux';
import { Reducer as PreviewReducer } from './modules/preview/reducer';

export type State = {
  routerReducer: RouterState,
  previewReducer: PreviewReducer,
};

export type OriginalImage = {
  source: string,
  file: File,
};

export type MosaicData = Array<Array<{
  red: number;
  green: number;
  blue: number;
}>>;

export type Mosaic = {
  data: MosaicData,
  width: number,
  height: number,
};
