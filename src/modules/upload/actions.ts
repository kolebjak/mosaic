import { UPLOAD_IMAGE } from './constants';

export type UploadImageAction = (image: File) => UploadImageActionResponse;
export type UploadImageActionResponse = {
  type: UPLOAD_IMAGE,
  image: File,
};

export const uploadImageAction: UploadImageAction = (image: File) => ({
  type: UPLOAD_IMAGE,
  image,
});

export type Action = UploadImageActionResponse;
