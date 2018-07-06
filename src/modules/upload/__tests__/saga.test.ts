import { testSaga } from 'redux-saga-test-plan';
import { uploadImage } from '../saga';
import { setPreviewImageSrcAction } from '../../preview/actions';
import { Routes } from '../../routes';
import { push } from 'react-router-redux';

describe('Upload page sagas', () => {
  it('uploadImage', () => {
    const image = new File(['img'], 'img.png', { type: 'image/png', });
    const result = 'result';
    testSaga(uploadImage, { image })
      .next()
      .next(result)
      .put(setPreviewImageSrcAction(result))
      .next()
      .put(push(Routes.preview))
      .next()
      .isDone();
  });
});
