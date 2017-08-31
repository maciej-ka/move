import React from 'react';
import TextInput from './TextInput';
import { mount } from 'enzyme';

it('has correct x position', () => {
  const wrapper = mount(<TextInput x='10' y='20' />);
  expect(wrapper.find('text').props().x).toEqual("10");
})

it('has correct y position', () => {
  const wrapper = mount(<TextInput x='10' y='20' />);
  expect(wrapper.find('text').props().y).toEqual("20");
})

it('shows initial value', () => {
  const wrapper = mount(<TextInput x='10' y='20' value='foo' />);
  expect(wrapper.find('text').text()).toEqual('foo');
})

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
it('trims text when too long')
