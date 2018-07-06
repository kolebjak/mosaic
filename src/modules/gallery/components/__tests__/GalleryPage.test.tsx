import * as React from 'react';
import { spy } from 'sinon';
import { mount } from 'enzyme';
import { GalleryPage } from '../GalleryPage';
import Image from '../Image';

const gallery = [
  {
    id: '1',
    link: 'http://1',
    animated: false,
  },
  {
    id: '2',
    link: 'http://2',
    animated: false,
  },
  {
    id: '3',
    link: 'http://3',
    animated: false,
  },
];

describe('<GalleryPage />', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <GalleryPage
        gallery={[]}
        fetchGallery={spy()}
        selectImage={spy()}
        setPage={spy()}
        page={0}
      />
    );
    expect(wrapper.find(GalleryPage).length).toEqual(1);
  });

  it('fetch gallery on mount', () => {
    const fetchGallery = spy();
    mount(
      <GalleryPage
        gallery={[]}
        fetchGallery={fetchGallery}
        selectImage={spy()}
        setPage={spy()}
        page={0}
      />
    );
    expect(fetchGallery.calledOnce).toEqual(true);
  });

  it('displays images', () => {
    const wrapper = mount(
      <GalleryPage
        gallery={gallery}
        fetchGallery={spy()}
        selectImage={spy()}
        setPage={spy()}
        page={0}
      />
    );
    expect(wrapper.find(Image).length).toEqual(3);
  });

  it('click on image', () => {
    const selectImage = spy();
    const wrapper = mount(
      <GalleryPage
        gallery={gallery}
        fetchGallery={spy()}
        selectImage={selectImage}
        setPage={spy()}
        page={1}
      />
    );

    const img = wrapper.find('img').first();
    img.simulate('click');
    expect(selectImage.calledWith('http://1')).toEqual(true);
  });

  it('click on previous', () => {
    const setPage = spy();
    const wrapper = mount(
      <GalleryPage
        gallery={gallery}
        fetchGallery={spy()}
        selectImage={spy()}
        setPage={setPage}
        page={2}
      />
    );

    const btn = wrapper.find('button').first();
    btn.simulate('click');
    expect(setPage.calledOnce).toEqual(true);
  });

  it('click on previous when on first page', () => {
    const setPage = spy();
    const wrapper = mount(
      <GalleryPage
        gallery={gallery}
        fetchGallery={spy()}
        selectImage={spy()}
        setPage={setPage}
        page={1}
      />
    );

    const btn = wrapper.find('button').first();
    btn.simulate('click');
    expect(setPage.calledOnce).toEqual(false);
  });
});
