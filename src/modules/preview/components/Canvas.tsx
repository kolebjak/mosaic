import * as React from 'react';
import { getAverageColor, loadImage } from '../../utils';

const CIRCLE_SIZE = 16;
const CIRCLE_AREA = Math.pow(CIRCLE_SIZE, 2);

export type Props = {
  imageSrc: string,
  setIsLoading: (isLoading: boolean) => void,
  onShare: (dataURL: string) => void,
};

/**
 * HTML canvas component that can transform image into mosaic
 */
class Canvas extends React.Component<Props> {
  private canvas: HTMLCanvasElement | null;

  componentDidMount() {
    const { imageSrc } = this.props;
    if (imageSrc) {
      this.setImageIntoCanvas(imageSrc);
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.imageSrc !== this.props.imageSrc) {
      this.setImageIntoCanvas(nextProps.imageSrc);
    }
  }

  /** Setting image from source to canvas */
  setImageIntoCanvas = (imageSrc: string) => {
    if (this.canvas) {
      const context = this.canvas.getContext('2d');
      if (context) {
        this.props.setIsLoading(true);
        loadImage(imageSrc).then((image: HTMLImageElement) => {
          if (this.canvas) {
            this.canvas.width = image.width;
            this.canvas.height = image.height;
          }
          context.drawImage(image, 0, 0, image.width, image.height);
          this.props.setIsLoading(false);
        });
      }
    }
  }

  setMosaicToCanvas = () => new Promise((resolve) => {
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
      context.beginPath();
      context.arc(sx, row * CIRCLE_SIZE, CIRCLE_SIZE / 2, 0, 2 * Math.PI, false);
      context.fillStyle = `rgb(${avg.red / CIRCLE_AREA}, ${avg.green / CIRCLE_AREA}, ${avg.blue / CIRCLE_AREA})`;
      context.fill();

      sx += CIRCLE_SIZE;
      if (sx >= width) {
        sx = 0;
        row += 1;
      }
      /** Get another 16x16px square */
      imageData = context.getImageData(sx, row * CIRCLE_SIZE, CIRCLE_SIZE, CIRCLE_SIZE);
    }
    resolve();
  })

  /** Share image to imgur */
  share = () => {
    if (this.canvas) {
      const base64Image = this.canvas.toDataURL().replace('data:image/png;base64,', '');
      this.props.onShare(base64Image);
    }
  }

  /** Generate mosaic from original image */
  generate = async () => {
    this.props.setIsLoading(true);
    await this.setMosaicToCanvas();
    this.props.setIsLoading(false);
  }

  render() {
    const { imageSrc } = this.props;
    if (imageSrc) {
      return (
        <div>
          <button className="button" onClick={() => this.share()}>​ Share</button>
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

export default Canvas;
