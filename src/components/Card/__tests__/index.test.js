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

  it('should pass props.imageSrc to image src prop', () => {
    // given & when
    const imageSrc = '/static/media/photo.jpg';
    const wrapper = shallow(<Card imageSrc={imageSrc} />);

    // then
    expect(wrapper.find('img').prop('src')).toBe('/static/media/photo.jpg');
  });
});
