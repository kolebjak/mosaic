import * as React from 'react';
import { connect } from 'react-redux';
import { selectMosaic, selectMosaicDimensions, selectOriginalImage } from '../reducer';
import { Mosaic, OriginalImage, State } from '../../../types';
import { SetMosaicAction, setMosaicAction, SetMosaicDimensionsAction, setMosaicDimensionsAction } from '../actions';
import MosaicImage from './Mosaic';

export type Props = {
  originalImage: OriginalImage,
  mosaic: Mosaic,
  setMosaic: SetMosaicAction,
  setMosaicDimensions: SetMosaicDimensionsAction,
  mosaicDimensions: {
    width: number,
    height: number,
  },
};

class PreviewPage extends React.Component<Props> {
  private canvas: HTMLCanvasElement | null;

  componentDidMount() {
    const { originalImage } = this.props;
    if (originalImage) {
      this.setImageIntoCanvas(originalImage.source);
    }
  }

  setImageIntoCanvas = (imageSrc: string) => {
    if (this.canvas) {
      const context = this.canvas.getContext('2d');
      if (context) {
        const image = new Image();
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

  generateMosaic = () => {
    if (this.canvas) {
      const context = this.canvas.getContext('2d');
      if (!context) {
        return;
      }
      const { width, height } = this.canvas;
      let imageData = context.getImageData(0, 0, width, height);
      let data = imageData.data;
      let mosaic: Mosaic = [];

      for (let i = 0; i < data.length; i += 4) {

        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];
        const pixelNumber = i / 4;

        const colNumber = pixelNumber % this.canvas.width;
        const rowNumber = Math.floor(pixelNumber / this.canvas.width);

        const squareColNumber = Math.floor(colNumber / 16);
        const squareRowNumber = Math.floor(rowNumber / 16);

        if (!mosaic[squareRowNumber]) {
          mosaic[squareRowNumber] = [];
        }

        if (mosaic[squareRowNumber][squareColNumber]) {
          mosaic[squareRowNumber][squareColNumber].red += red;
          mosaic[squareRowNumber][squareColNumber].green += green;
          mosaic[squareRowNumber][squareColNumber].blue += blue;
        } else {
          mosaic[squareRowNumber][squareColNumber] = { red, green, blue };
        }

      }

      this.props.setMosaic(mosaic);
      this.props.setMosaicDimensions(width, height);
    }
  }

  render() {
    const { originalImage, mosaic, mosaicDimensions } = this.props;
    if (originalImage) {
      return (
        <div>
          <MosaicImage
            mosaic={mosaic}
            mosaicDimensions={mosaicDimensions}
          />
          <canvas
            ref={(canvas) => this.canvas = canvas}
          />
          <button onClick={this.generateMosaic}>Generate Mosaic</button>
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
    mosaicDimensions: selectMosaicDimensions(state),
  }),
  {
    setMosaic: setMosaicAction,
    setMosaicDimensions: setMosaicDimensionsAction,
  }
)(PreviewPage);
