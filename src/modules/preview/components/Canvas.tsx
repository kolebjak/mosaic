import * as React from 'react';

export type Props = {
  imageSrc: string,
  setCanvasIsLoading: (isLoading: boolean) => void,
  isLoading: boolean,
  onGenerate: (imageData: ImageData) => void,
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
        this.props.setCanvasIsLoading(true);
        this.loadImage(imageSrc).then((image: HTMLImageElement) => {
          if (this.canvas) {
            this.canvas.width = image.width;
            this.canvas.height = image.height;
          }
          context.drawImage(image, 0, 0, image.width, image.height);
          this.props.setCanvasIsLoading(false);
        });
      }
    }
  }

  share = () => {
    if (this.canvas) {
      this.props.onShare(this.canvas.toDataURL());
    }
  }

  generate = () => {
    if (this.canvas) {
      console.log('click');
      const context = this.canvas.getContext('2d');
      if (context) {
        const imageData = context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.props.onGenerate(imageData);
        console.log('finished');
      }
    }
  }

  render() {
    const { imageSrc, isLoading } = this.props;
    if (imageSrc) {
      return (
        <div>
          <button className="button" onClick={() => this.share()}>​ Share</button>
          <button className="button" onClick={() => this.generate()}>Generate Mosaic</button>
          {isLoading && <div>Loading</div>}
          <canvas style={{ visibility: isLoading ? 'hidden' : 'visible' }} ref={(canvas) => this.canvas = canvas}/>
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
