
import { shallow } from 'enzyme'
import ProductHeader from '../ProductHeader'
import React from 'react';

describe('ProductHeader Component', () => {

    it('has an h2 tag', () => {
      const component = shallow(<ProductHeader/>);    
      var node = component.find('h2');
      expect(node.length).toEqual(1);
     
  });

    it('has a title class', () => {
      const component = shallow(<ProductHeader/>);
      var node = component.find('h2');
      expect(node.hasClass('title')).toBeTruthy();
    })
  })