import * as React from 'react';
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

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('renders without crashing', () => {
    const wrapper = mount(
      <GalleryPage
        isLoading={false}
        gallery={[]}
        fetchGallery={jest.fn()}
        selectImage={jest.fn()}
        setPage={jest.fn()}
        page={0}
      />
    );
    expect(wrapper.find(GalleryPage).length).toEqual(1);
  });

  it('fetch gallery on mount', () => {
    const fetchGallery = jest.fn();
    mount(
      <GalleryPage
        isLoading={false}
        gallery={[]}
        fetchGallery={fetchGallery}
        selectImage={jest.fn()}
        setPage={jest.fn()}
        page={0}
      />
    );
    expect(fetchGallery).toHaveBeenCalledTimes(1);
  });

  it('displays images', () => {
    const wrapper = mount(
      <GalleryPage
        isLoading={false}
        gallery={gallery}
        fetchGallery={jest.fn()}
        selectImage={jest.fn()}
        setPage={jest.fn()}
        page={0}
      />
    );
    expect(wrapper.find(Image).length).toEqual(3);
  });

  it('click on image', () => {
    const selectImage = jest.fn();
    const wrapper = mount(
      <GalleryPage
        isLoading={false}
        gallery={gallery}
        fetchGallery={jest.fn()}
        selectImage={selectImage}
        setPage={jest.fn()}
        page={1}
      />
    );

    const img = wrapper.find('img').first();
    img.simulate('click');
    expect(selectImage).toHaveBeenCalledWith('http://1');
  });

  it('click on previous', () => {
    const setPage = jest.fn();
    const wrapper = mount(
      <GalleryPage
        isLoading={false}
        gallery={gallery}
        fetchGallery={jest.fn()}
        selectImage={jest.fn()}
        setPage={setPage}
        page={2}
      />
    );

    const btn = wrapper.find('button').first();
    btn.simulate('click');
    expect(setPage).toHaveBeenCalledTimes(1);
  });

  it('click on previous when on first page', () => {
    const setPage = jest.fn();
    const wrapper = mount(
      <GalleryPage
        isLoading={false}
        gallery={gallery}
        fetchGallery={jest.fn()}
        selectImage={jest.fn()}
        setPage={setPage}
        page={1}
      />
    );

    const btn = wrapper.find('button').first();
    btn.simulate('click');
    expect(setPage).not.toHaveBeenCalled();
  });
});
