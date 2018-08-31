import React from 'react';
import ReactDOM from 'react-dom';
import LazyList from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LazyList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
