import * as React from 'react';
import { connect } from 'react-redux';
import { Gallery, State } from '../../../types';
import { selectGallery, selectPage } from '../reducer';
import {
  FetchGalleryAction,
  fetchGalleryAction,
  SelectImageAction,
  selectImageAction, SetPageAction,
  setPageAction
} from '../actions';

export type Props = {
  gallery: Gallery,
  fetchGallery: FetchGalleryAction,
  selectImage: SelectImageAction,
  setPage: SetPageAction,
  page: number,
};

class GalleryPage extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchGallery();
  }

  render() {
    const { gallery, selectImage, setPage, page } = this.props;
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
          <button onClick={() => setPage(page - 1)}>Previous</button>
          <span>{page}</span>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state: State) => ({
    gallery: selectGallery(state),
    page: selectPage(state),
  }),
  {
    fetchGallery: fetchGalleryAction,
    selectImage: selectImageAction,
    setPage: setPageAction,
  }
)(GalleryPage);
