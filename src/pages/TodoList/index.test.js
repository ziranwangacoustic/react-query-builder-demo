import React from 'react';
import { shallow } from 'enzyme';
import Todos from '.';

describe('<Todos />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Todos />).dive();
  });

  test('renders ', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });
});
