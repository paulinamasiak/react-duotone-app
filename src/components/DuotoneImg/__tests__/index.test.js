import React from 'react';
import { mount } from 'enzyme';
import DuotoneImg from '../index';

describe('DuotoneImg component', () => {
  it('should render without crashing', () => {
    // when
    const wrapper = mount(<DuotoneImg />);

    // then
    expect(wrapper.exists()).toBe(true);
  });

  it('should render canvas', () => {
    // when
    const wrapper = mount(<DuotoneImg />);

    // then
    expect(wrapper.find('canvas').exists()).toBe(true);
  });
});
