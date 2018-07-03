import * as React from 'react';
import { connect } from 'react-redux';
import { Gallery, State } from '../../../types';
import { selectGallery } from '../reducer';
import { FetchGalleryAction, fetchGalleryAction, SelectImageAction, selectImageAction } from '../actions';

export type Props = {
  gallery: Gallery,
  fetchGallery: FetchGalleryAction,
  selectImage: SelectImageAction,
};

class GalleryPage extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchGallery();
  }

  render() {
    const { gallery, selectImage } = this.props;
    return (
      <div>
        <h1>Click on your favourite picture</h1>
        <div>
          {gallery.map(image => (
            <img
              className="galleryImage"
              key={image.id}
              src={image.link}
              width={200}
              onClick={() => selectImage(image.link)}
            />
          ))}
        </div>
        <div>
          Previous Next
        </div>
      </div>
    );
  }
}

export default connect(
  (state: State) => ({
    gallery: selectGallery(state),
  }),
  {
    fetchGallery: fetchGalleryAction,
    selectImage: selectImageAction,
  }
)(GalleryPage);
