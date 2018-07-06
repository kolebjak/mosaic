import { testSaga } from 'redux-saga-test-plan';
import { shareImage } from '../saga';
import { setIsLoadingAction, setSharedImageAction } from '../actions';
import { postImage } from '../../fetcher';

const data = {
  id: '1',
  link: 'http://1',
  animated: false,
};

describe('Preview page sagas', () => {
  it('shareImage', () => {
    testSaga(shareImage, { base64Image: 'base64Image' })
      .next()
      .put(setIsLoadingAction(true))
      .next()
      .call(postImage, 'base64Image')
      .next({ success: true, data })
      .put(setSharedImageAction(data))
      .next()
      .put(setIsLoadingAction(false))
      .next()
      .isDone();
  });
});
