import React from 'react'
import { shallow,mount } from 'enzyme'

import { stub } from 'sinon'
import ProductList from '../ProductList';
import ProductContainer from '../ProductContainer'

describe('Product listing', () => {

    let productData, component, handleProductClick;

    beforeEach( () => {
         productData =   [
            {
                id: 1,
                name: 'NIKE Liteforce Blue Sneakers',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
                status: 'Available'
        
            },
            {
                id: 2,
                name: 'U.S. POLO ASSN. Slippers',
                description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
                status: 'Available'
        
            },
        ]
    })

    beforeEach(()=> {
        handleProductClick = jest.fn();
        component = mount(<ProductList products = {productData} selectProduct={handleProductClick} />);
    })

    it('should display all product items', () => {
    
        let links = component.find('a');
        expect(links.length).toEqual(productData.length);
    })
    

it('should call selectProduct when clicked', () => {

    const firstLink = component.find('a').first();
    firstLink.simulate('click');
    expect(handleProductClick.mock.calls.length).toEqual(1);

    })

})