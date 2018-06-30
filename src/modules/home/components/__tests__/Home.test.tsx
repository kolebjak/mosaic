import * as React from 'react';
import { mount } from 'enzyme';
import Home from '../HomePage';

describe('<Home />', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find(Home).length).toEqual(1);
  });
});
