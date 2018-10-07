import React from 'react';
import { shallow } from 'enzyme';

import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
  it('should apply the "not-found" class', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper.hasClass('not-found')).toBeTruthy();
  });

  it('should render the text', () => {
    const wrapper = shallow(<NotFoundPage />);

    const h1 = wrapper.find('h1');
    const h2 = wrapper.find('h2');

    expect(h1.text()).toEqual('404');
    expect(h2.text()).toEqual("We couldn't find this page.");
  });
});