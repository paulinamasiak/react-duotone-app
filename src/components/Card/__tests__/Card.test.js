import React from 'react';
import { shallow } from 'enzyme';
import Card from '../index';

describe('Card component', () => {
  it('should render without crashing', () => {
    // when
    const wrapper = shallow(<Card />);

    // then
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correctly with default props', () => {
    // when
    const wrapper = shallow(<Card />);

    // then
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    // given & when
    const children = <h1>Children</h1>;
    const wrapper = shallow(<Card>{children}</Card>);

    // then
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});
