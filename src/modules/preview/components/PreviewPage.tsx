import * as React from 'react';

export default () => (<div>Preview</div>);

// componentDidMount() {
//   console.log('did mount');
//   this.setImageIntoCanvas(this.props.imageSrc);
// }

// setImageIntoCanvas = (imageSrc: string) => {
//   if (this.canvas) {
//     const context = this.canvas.getContext('2d');
//     if (context) {
//       const image = new Image();
//       image.src = imageSrc;
//       image.onload = () => {
//         context.drawImage(image, 0, 0, 200, 200);
//       };
//     }
//   }
// }
