import * as React from 'react';
import { connect } from 'react-redux';
import { uploadImageAction, UploadImageAction } from '../actions';

export type Props = {
  uploadImage: UploadImageAction,
};

/**
 * Page with simple upload form
 */
class UploadPage extends React.Component<Props> {

  /** Call saga on submit with uploaded file */
  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const file = target.image.files[0];
    this.props.uploadImage(file);
  }

  render() {
    return (
      <div>
        <h1>Upload your favourite picture</h1>
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
