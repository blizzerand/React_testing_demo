import React from 'react';


const ProductDetails = ({product}) => {

 var productData;

  if(product)
     productData = <div>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <hr/>
                  <h4 className="product-status">{product.status}</h4>  </div>;
  else
    productData = <h2 className="product-error">Sorry. Product doesnt exist</h2>;

  return (
    <div style={{ display: 'flex' }}>
      <div style={{
         padding: '0 10% 0 10%',
         width: '80%',
         margin: 'auto',
         background: '#ffffff' }}> 

         {productData} 
      </div>
    </div>
  )    
}
      
export default ProductDetails;