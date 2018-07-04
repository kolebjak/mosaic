import * as React from 'react';
import { connect } from 'react-redux';
import { selectIsLoading, selectPreviewImageSrc, selectSharedImage } from '../reducer';
import { State, Image as ImageProps } from '../../../types';
import {
  SetIsLoadingAction, setIsLoadingAction,
  ShareImageAction,
  shareImageAction,
} from '../actions';
import Canvas from './Canvas';

export type Props = {
  previewImageSrc: string,
  shareImage: ShareImageAction,
  sharedImage: ImageProps,
  isLoading: boolean,
  setIsLoading: SetIsLoadingAction,
};

/**
 * Component for displaying Uploaded image / Mosaic
 */
class PreviewPage extends React.Component<Props> {

  onShare = (base64Image: string) => {
    this.props.shareImage(base64Image);
  }

  render() {
    const { previewImageSrc, sharedImage, isLoading, setIsLoading } = this.props;
    if (previewImageSrc) {
      return (
        <div>
          {isLoading && <div className="loading">Loading</div>}
          {sharedImage && <div>Shared on Imgur <a href={sharedImage.link} target="_blank">HERE</a></div>}
          <Canvas
            onShare={this.onShare}
            imageSrc={previewImageSrc}
            setIsLoading={setIsLoading}
          />
        </div>
      );
    } else {
      return (
        <div>There is nothing to see, first upload or select image.</div>
      );
    }
  }
}

export default connect(
  (state: State) => ({
    previewImageSrc: selectPreviewImageSrc(state),
    sharedImage: selectSharedImage(state),
    isLoading: selectIsLoading(state),
  }),
  {
    shareImage: shareImageAction,
    setIsLoading: setIsLoadingAction,
  }
)(PreviewPage);
