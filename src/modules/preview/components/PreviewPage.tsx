import * as React from 'react';
import { connect } from 'react-redux';
import { selectIsLoading, selectPreviewImageSrc, selectSharedImage } from '../reducer';
import { State, Image as ImageProps } from '../../../types';
import {
  GenerateMosaicAction,
  generateMosaicAction, SetIsLoadingAction, setIsLoadingAction,
  ShareImageAction,
  shareImageAction,
} from '../actions';
import Canvas from './Canvas';

export type Props = {
  previewImageSrc: string,
  generateMosaic: GenerateMosaicAction,
  shareImage: ShareImageAction,
  sharedImage: ImageProps,
  isLoading: boolean,
  setIsLoading: SetIsLoadingAction,
};

/**
 * Component for displaying Uploaded image / Mosaic
 */
class PreviewPage extends React.Component<Props> {

  /** Call saga with image data to compute data for <Mosaic /> component */
  onGenerage = (imageData: ImageData) => {
    this.props.generateMosaic(imageData);
  }

  onShare = (dataUrl: string) => {
    const uri = dataUrl.replace('data:image/png;base64,', '');
    this.props.shareImage(uri);
  }

  render() {
    const { previewImageSrc, sharedImage, isLoading, setIsLoading } = this.props;
    if (previewImageSrc) {
      return (
        <div>
          {sharedImage && <div>Shared on Imgur <a href={sharedImage.link} target="_blank">HERE</a></div>}
          <Canvas
            onGenerate={this.onGenerage}
            onShare={this.onShare}
            imageSrc={previewImageSrc}
            isLoading={isLoading}
            setCanvasIsLoading={setIsLoading}
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
    generateMosaic: generateMosaicAction,
    shareImage: shareImageAction,
    setIsLoading: setIsLoadingAction,
  }
)(PreviewPage);
