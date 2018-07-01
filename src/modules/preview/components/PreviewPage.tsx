import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { connect } from 'react-redux';
import { selectMosaic, selectOriginalImage } from '../reducer';
import { OriginalImage, State, Mosaic as MosaicProps } from '../../../types';
import {
  GenerateMosaicAction,
  generateMosaicAction,
} from '../actions';
import Mosaic from './Mosaic';

export type Props = {
  mosaic: MosaicProps,
  originalImage: OriginalImage,
  generateMosaic: GenerateMosaicAction,
};

/**
 * Component for displaying Uploaded image / Mosaic
 */
class PreviewPage extends React.Component<Props> {
  private canvas: HTMLCanvasElement | null;

  componentDidMount() {
    const { originalImage } = this.props;
    if (originalImage) {
      this.setImageIntoCanvas(originalImage.source);
    }
  }

  /** Setting image from source to canvas */
  setImageIntoCanvas = (imageSrc: string) => {
    if (this.canvas) {
      const context = this.canvas.getContext('2d');
      if (context) {
        const image = new Image();
        image.crossOrigin = 'Anonymous';
        image.src = imageSrc;
        image.onload = () => {
          if (this.canvas) {
            this.canvas.width = image.width;
            this.canvas.height = image.height;
          }
          context.drawImage(image, 0, 0, image.width, image.height);
        };
      }
    }
  }

  /** Call saga with image data to compute data for <Mosaic /> component */
  generateMosaic = () => {
    if (this.canvas) {
      const { generateMosaic } = this.props;
      const { width, height } = this.canvas;
      const context = this.canvas.getContext('2d');
      if (!context) {
        return;
      }

      const imageData = context.getImageData(0, 0, width, height);
      generateMosaic(imageData, width, height);
    }
  }

  render() {
    const { originalImage, mosaic } = this.props;

    /** Convert SVG to base64 */
    const base64 = btoa(renderToStaticMarkup(<Mosaic mosaic={mosaic} />));
    /** Prepend data information to create uri */
    const dataUri = `data:image/svg+xml;base64,${base64}`;

    if (originalImage) {
      return (
        <div>
          {mosaic ?
            <div>
              <button className="button" onClick={() => console.log(dataUri)}>​Share ​​image ​​to ​​imgur</button>
              <img src={dataUri}/>
            </div>  :
            <div>
              <button className="button" onClick={this.generateMosaic}>Generate Mosaic</button>
              <canvas ref={(canvas) => this.canvas = canvas}/>
            </div>
          }
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
    originalImage: selectOriginalImage(state),
    mosaic: selectMosaic(state),
  }),
  {
    generateMosaic: generateMosaicAction,
  }
)(PreviewPage);
