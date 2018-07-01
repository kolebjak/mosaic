import * as React from 'react';
import configureStore from 'redux-mock-store';
import { mount, ReactWrapper } from 'enzyme';
import UploadPage from '../UploadPage';
import { Provider } from 'react-redux';

const initialState = {};
const mockStore = configureStore();
let wrapper: ReactWrapper;
let store;

describe('<UploadPage />', () => {

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><UploadPage /></Provider>);
  });

  it('renders without crashing', () => {
    expect(wrapper.find(UploadPage).length).toEqual(1);
  });
});
