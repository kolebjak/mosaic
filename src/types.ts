import { RouterState } from 'react-router-redux';
import { Reducer as PreviewReducer } from './modules/preview/reducer';
import { Reducer as GalleryReducer } from './modules/gallery/reducer';

export type State = {
  routerReducer: RouterState,
  previewReducer: PreviewReducer,
  galleryReducer: GalleryReducer,
};

export type Image = {
  id: string,
  link: string,
  animated: boolean,
};

export type Gallery = Image[];

export type FetchGalleryResponse = {
  data: Gallery,
  success: boolean,
  status: number,
};

export type PostImageResponse = {
  data: {
    link: string,
  },
  success: boolean,
  status: number,
};
