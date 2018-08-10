import React, { Component } from 'react';
import ProductDetails from './ProductDetails'
import ProductList from './ProductList'


class ProductContainer extends Component {
    constructor() {
        super();
        this.state = {
            /* Initialize the product list state */
          productList:  [],
            selectedProduct: '',
               
        }
        this.handleProductClick = this.handleProductClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            productList: [
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
                {
                    id: 3,
                    name: 'ADIDAS Adispree Running Shoes',
                    description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
                    status: 'Available'
                },
                {
                    id: 4,
                    name: 'Lee Cooper Mid Sneakers',
                    description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
                    status: 'Out of Stock'
                },
            ]
        })
    }

    handleProductClick(productId) {
       let selectedProduct= this.state.productList.find(x => x.id === Number(productId));
       /* Update selectedProduct */
       selectedProduct ?  
       this.setState({
            selectedProduct: selectedProduct
        })  : null
    }

    render() {
        return(
            <div style={{margin: '8% 0 0 10%'}}>
                
                {/* List of products */}
                <ProductList products={this.state.productList} selectProduct={this.handleProductClick}/> 

                {/* Detail view of each product */}
                <ProductDetails product = {this.state.selectedProduct } />
          </div>
            

        )
    }
}
export default ProductContainer;