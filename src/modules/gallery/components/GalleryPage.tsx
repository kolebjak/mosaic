import * as React from 'react';
import {connect} from 'react-redux';
import {Gallery, State} from '../../../types';
import {selectGallery, selectGalleryIsLoading, selectPage} from '../reducer';
import {
  FetchGalleryAction,
  fetchGalleryAction,
  SelectImageAction,
  selectImageAction, SetPageAction,
  setPageAction
} from '../actions';
import Image from './Image';
import {List} from "antd";

export type Props = {
  gallery: Gallery,
  fetchGallery: FetchGalleryAction,
  selectImage: SelectImageAction,
  setPage: SetPageAction,
  page: number,
  isLoading: boolean,
};

export class GalleryPage extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchGallery();
  }

  render() {
    const {gallery, setPage, page, selectImage, isLoading} = this.props;

    return (
      <div>
        <h1>Click on your favourite picture</h1>
        <List
          loading={isLoading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={gallery}
          renderItem={image => (
            <List.Item>
              <Image
                key={image.id}
                src={image.link}
                onClick={() => selectImage(image.link)}
              />
            </List.Item>
          )}
        />
        <div>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
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
    isLoading: selectGalleryIsLoading(state),
  }),
  {
    fetchGallery: fetchGalleryAction,
    selectImage: selectImageAction,
    setPage: setPageAction,
  }
)(GalleryPage);
