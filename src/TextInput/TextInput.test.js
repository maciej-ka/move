import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const svg = document.createElement('svg');
  ReactDOM.render(<TextInput />, svg);
});

it('shows initial value', () => {
  const input = shallow(<TextInput value='foo' />);
  expect(input.contains('foo')).toEqual(true);
})

it('has correct x and y position')
it('is active on click')
it('is not active on click outside')
it('shows caret when clicked')
it('on key appends char and updates caret')
it('does not react to key when inactive')
it('on left arrow moves carret')
it('on right arrow moves carret')
it('on tab moves focus to next index')
it('shows selection when dragged')
it('replaces selection with typed char')
