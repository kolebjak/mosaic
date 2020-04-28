import * as React from 'react';
import { mount } from 'enzyme';
import Image from '../Image';

describe('<Image />', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <Image src="http://"/>
    );
    expect(wrapper.find(Image).length).toEqual(1);
  });
  it('click on image', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Image src="http://" onClick={onClick}/>
    );
    wrapper.find('img').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
