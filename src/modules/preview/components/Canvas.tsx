import * as React from 'react';
import { getAverageColor, loadImage } from '../../utils';
import { selectIsLoading, selectPreviewImageSrc, selectSharedImage } from '../reducer';
import { Image, State } from '../../../types';
import { connect } from 'react-redux';
import { SetIsLoadingAction, setIsLoadingAction, ShareImageAction, shareImageAction } from '../actions';

const CIRCLE_SIZE = 16;

export type Props = {
  previewImageSrc: string,
  sharedImage: Image,
  shareImage: ShareImageAction,
  isLoading: boolean,
  setIsLoading: SetIsLoadingAction,
};

/**
 * HTML canvas component that can transform image into mosaic
 */
class Canvas extends React.Component<Props> {
  private canvas: HTMLCanvasElement | null;

  async componentDidMount() {
    const { previewImageSrc } = this.props;
    if (previewImageSrc) {
      await this.setImageIntoCanvas(previewImageSrc);
    }
  }

  async componentWillReceiveProps(nextProps: Props) {
    if (nextProps.previewImageSrc !== this.props.previewImageSrc) {
      await this.setImageIntoCanvas(nextProps.previewImageSrc);
    }
  }

  /** Setting image from source to canvas */
  setImageIntoCanvas = async (imageSrc: string) => {
    if (this.canvas) {
      const context = this.canvas.getContext('2d');
      if (context) {
        this.props.setIsLoading(true);
        const image = await loadImage(imageSrc);
        if (this.canvas) {
          this.canvas.width = Math.floor(image.width / CIRCLE_SIZE) * CIRCLE_SIZE;
          this.canvas.height = Math.floor(image.height / CIRCLE_SIZE) * CIRCLE_SIZE;
        }
        context.drawImage(image, 0, 0, image.width, image.height);
        this.props.setIsLoading(false);
      }
    }
  }

  setMosaicToCanvas = async () => {
    if (!this.canvas) {
      return;
    }

    const context = this.canvas.getContext('2d');
    if (!context) {
      return;
    }

    const { width, height } = this.canvas;

    let sx = 0;
    let row = 0;
    let imageData = context.getImageData(sx, row * CIRCLE_SIZE, CIRCLE_SIZE, CIRCLE_SIZE);

    while (Math.floor(height / CIRCLE_SIZE) >= row) {
      /** Compute average color */
      const avg = getAverageColor(imageData);
      /** Clear original image */
      const clearedSquare = context.createImageData(CIRCLE_SIZE, CIRCLE_SIZE);
      context.putImageData(clearedSquare, sx, row * CIRCLE_SIZE);
      /** Draw circle with average color */
      const radius = CIRCLE_SIZE / 2;
      context.beginPath();
      context.arc(sx + radius, row * CIRCLE_SIZE + radius, radius, 0, 2 * Math.PI);
      context.fillStyle = `rgb(${avg.red}, ${avg.green}, ${avg.blue})`;
      context.fill();

      sx += CIRCLE_SIZE;
      if (sx >= width) {
        sx = 0;
        row += 1;
      }
      /** Get another 16x16px square */
      imageData = context.getImageData(sx, row * CIRCLE_SIZE, CIRCLE_SIZE, CIRCLE_SIZE);
    }
  }

  /** Share image to imgur */
  share = () => {
    if (this.canvas) {
      const { shareImage } = this.props;
      const base64Image = this.canvas.toDataURL().replace('data:image/png;base64,', '');
      shareImage(base64Image);
    }
  }

  /** Generate mosaic from original image */
  generate = async () => {
    await this.setMosaicToCanvas();
  }

  render() {
    const { previewImageSrc, sharedImage, isLoading } = this.props;
    if (previewImageSrc) {
      return (
        <div>
          {isLoading && <div className="loading">Loading</div>}

          <div className="share">
            <button className="button" onClick={() => this.share()}>​ Share</button>
            {sharedImage && <span>Shared on Imgur <a href={sharedImage.link} target="_blank">HERE</a></span>}
          </div>

          <button className="button" onClick={() => this.generate()}>Generate Mosaic</button>
          <canvas ref={(canvas) => this.canvas = canvas}/>
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
)(Canvas);
