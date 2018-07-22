import React from 'react';

import { shallow } from 'enzyme';
import { isAcceptedFile } from '../helpers';
import FileInput from '../index';

jest.mock('../helpers');

describe('FileInput component', () => {
  it('should render without crashing', () => {
    // when
    const wrapper = shallow(<FileInput />);

    // then
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correctly with default props', () => {
    // when
    const wrapper = shallow(<FileInput />);

    // then
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should display placeholder based on props.placeholder', () => {
    // when
    const wrapper = shallow(<FileInput placeholder="Drag & drop a file" />);

    // then
    expect(wrapper.find('.file-input-dnd').text()).toBe('Drag & drop a file');
  });

  it('should pass props.accept to the input accept prop', () => {
    // given & when
    const wrapper = shallow(<FileInput accept="image/*" />);

    // then
    expect(wrapper.find('input').prop('accept')).toBe('image/*');
  });

  describe('on dragEnter', () => {
    it('should add is-dragover class', () => {
      // given
      const wrapper = shallow(<FileInput />);

      // when
      wrapper.simulate('dragEnter');

      // then
      expect(wrapper.hasClass('is-dragover')).toBe(true);
    });
  });

  describe('on dragOver', () => {
    it('should call preventDefault', () => {
      // given
      const wrapper = shallow(<FileInput />);
      const mockEvent = {
        preventDefault: jest.fn(),
      };

      // when
      wrapper.simulate('dragover', mockEvent);

      // then
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });

  describe('on dragLeave', () => {
    it('should remove is-dragover class', () => {
      // given
      const wrapper = shallow(<FileInput />);

      // when
      wrapper.simulate('dragEnter');
      wrapper.simulate('dragLeave');

      // then
      expect(wrapper.hasClass('id-dragover')).toBe(false);
    });
  });

  describe('on drop', () => {
    let wrapper;
    let onChangeSpy;
    let eventMock;

    beforeEach(() => {
      // given
      onChangeSpy = jest.fn();
      wrapper = shallow(<FileInput onChange={onChangeSpy} />);
      eventMock = {
        preventDefault: jest.fn(),
        dataTransfer: {
          files: [{ name: 'image.jpg', type: 'image/jpeg' }],
        },
      };

      wrapper.simulate('dragEnter');
    });

    it('should call preventDefault', () => {
      // when
      wrapper.simulate('drop', eventMock);

      // then
      expect(eventMock.preventDefault).toHaveBeenCalled();
    });

    it('should call props.onChange when dropped file is accepted', () => {
      // given
      isAcceptedFile.mockReturnValue(true);

      // when
      wrapper.simulate('drop', eventMock);

      // then
      expect(onChangeSpy).toHaveBeenCalledWith({
        name: 'image.jpg',
        type: 'image/jpeg',
      });
    });

    it('should not call props.onChange when file is not accepted', () => {
      // given
      isAcceptedFile.mockReturnValue(false);

      // when
      wrapper.simulate('drop', eventMock);

      // then
      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('should remove is-dragover class', () => {
      // when
      wrapper.simulate('drop', eventMock);

      // then
      expect(wrapper.hasClass('is-dragover')).toBe(false);
    });
  });

  describe('on input change', () => {
    it('should call props.onChange with a single file', () => {
      // given
      const onChangeSpy = jest.fn();
      const wrapper = shallow(<FileInput onChange={onChangeSpy} />);
      const mockEvent = {
        target: {
          files: [{ name: 'image.jpg', type: 'image/jpeg' }],
        },
      };

      // when
      wrapper.find('input').simulate('change', mockEvent);

      // then
      expect(onChangeSpy).toHaveBeenCalledWith({
        name: 'image.jpg',
        type: 'image/jpeg',
      });
    });
  });
});
