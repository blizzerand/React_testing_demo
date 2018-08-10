import React from 'react';
import ProductContainer from '../ProductContainer'
import { shallow } from 'enzyme';


describe('Product Container', () => {

    let productData, component, componentDidMountSpy ;

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


    it('should call componentDidMount once', () => {
        componentDidMountSpy = spyOn(ProductContainer.prototype, 'componentDidMount');
        component = shallow(<ProductContainer/>);
        expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    });

    it('should populate the state', () => {
        component = shallow(<ProductContainer/>);
        expect(component.state().productList.length).toEqual(4)

    })
        
    it('should have a working method called handleProductClick', () => {
        let firstProduct = productData[0].id;
        component = shallow(<ProductContainer/>);
        component.instance().handleProductClick(firstProduct);

        expect(component.state().selectedProduct).toEqual(productData[0]);
    })

})