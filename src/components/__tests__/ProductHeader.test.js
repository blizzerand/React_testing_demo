
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import React from 'react';
import ProductHeader from '../ProductHeader'



describe('ProductHeader Component', () => {
    it('has an h2 tag', () => {
    

      const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);    
      var node = ReactTestUtils.findRenderedDOMComponentWithTag(
       component, 'h2'
     );
    
  });

    it('has a title class', () => {

      const component = ReactTestUtils.renderIntoDocument(<ProductHeader/>);    
      var node = ReactTestUtils.findRenderedDOMComponentWithClass(
       component, 'title'
     );
    })
  })