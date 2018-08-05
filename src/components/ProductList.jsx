import React from 'react';

const ProductList = ({ products, selectProduct }) => {

  var linkList = products.map( (product) => {
    return(
      <li key={product.id}>
        <a onClick= { () => selectProduct(product.id)} style={{cursor: 'pointer'}} >
          {product.name}
        </a>
      </li>
      )
          
    })
 
  return(
    <div>
     <div style={{ display: 'block',  justifyContent: "space-between" }}>
      <div className="box">
        <h3 className="title"> Products</h3>
        <ul  style={{ listStyleType: 'none', padding:"4%", fontSize:'15px' }}> {linkList} </ul>
      </div>
    </div>
    </div>

  )
}

export default ProductList;