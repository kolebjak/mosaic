import * as React from 'react';
import { spy } from 'sinon';
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
    const onClick = spy();
    const wrapper = mount(
      <Image src="http://" onClick={onClick}/>
    );
    wrapper.find('img').simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });
});
