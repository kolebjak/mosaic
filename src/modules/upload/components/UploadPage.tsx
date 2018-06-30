import * as React from 'react';
import { connect } from 'react-redux';
import { uploadImageAction, UploadImageAction } from '../actions';

export type Props = {
  imageSrc: string,
  uploadImage: UploadImageAction,
};

class UploadPage extends React.Component<Props> {

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const file = target.image.files[0];
    this.props.uploadImage(file);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="file" accept="image/png, image/jpeg" name="image"/>
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  {
    uploadImage: uploadImageAction,
  }
)(UploadPage);
