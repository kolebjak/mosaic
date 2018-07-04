import * as React from 'react';
import { getAverageColor } from '../../utils';

export type Props = {
  imageSrc: string,
  setIsLoading: (isLoading: boolean) => void,
  onShare: (dataURL: string) => void,
};

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

  loadImage = async (imageSrc: string) => new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = imageSrc;
    image.onload = () => {
      resolve(image);
    };
  })

  /** Setting image from source to canvas */
  setImageIntoCanvas = (imageSrc: string) => {
    if (this.canvas) {
      const context = this.canvas.getContext('2d');
      if (context) {
        this.props.setIsLoading(true);
        this.loadImage(imageSrc).then((image: HTMLImageElement) => {
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
    let radius = 16;
    let imageData = context.getImageData(sx, row * radius, radius, radius);

    while (Math.floor(height / radius) >= row) {

      const avg = getAverageColor(imageData);
      const clearedSquare = context.createImageData(radius, radius);
      context.putImageData(clearedSquare, sx, row * radius);

      context.beginPath();
      context.arc(sx, row * radius, radius / 2, 0, 2 * Math.PI, false);
      context.fillStyle = avg;
      context.fill();

      sx += radius;
      if (sx >= width) {
        sx = 0;
        row += 1;
      }
      imageData = context.getImageData(sx, row * radius, radius, radius);
    }
    resolve();
  })

  share = () => {
    if (this.canvas) {
      const base64Image = this.canvas.toDataURL().replace('data:image/png;base64,', '');
      this.props.onShare(base64Image);
    }
  }

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
