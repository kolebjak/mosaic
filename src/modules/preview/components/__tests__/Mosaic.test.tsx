import * as React from 'react';
import { mount } from 'enzyme';
import Mosaic from '../Mosaic';
import { Mosaic as MosaicProps } from '../../../../types';

describe('<Mosaic />', () => {
  it('renders without crashing', () => {
    const mosaic = {} as MosaicProps;
    const wrapper = mount(<Mosaic mosaic={mosaic} />);
    expect(wrapper.find(Mosaic).length).toEqual(1);
  });
  it('renders null if there is no data provided', () => {
    const mosaic = {} as MosaicProps;
    const wrapper = mount(<Mosaic mosaic={mosaic} />);
    expect(wrapper.find(Mosaic).html()).toEqual(null);
  });
  it('renders correct number of circles', () => {
    const mosaic = {
      data: [
        [
          { red: 255, green: 0, blue: 0 },
          { red: 255, green: 0, blue: 0 },
          { red: 255, green: 0, blue: 0 },
        ],
        [
          { red: 0, green: 0, blue: 255 },
          { red: 0, green: 0, blue: 255 },
          { red: 0, green: 0, blue: 255 },
        ]
      ]
    } as MosaicProps;
    const wrapper = mount(<Mosaic mosaic={mosaic} />);
    expect(wrapper.find('circle').length).toEqual(6);
  });
});
