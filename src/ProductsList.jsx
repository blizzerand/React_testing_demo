import React from 'react';

const Products = ({ products, selectProduct }) => {

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
      <div style={{
        float:'left',
        padding: '10px',
        width: '30%',
        background: '#f0f0f0',
        marginLeft:'auto' }}>

        <h3> Products</h3>
        <ul  style={{ listStyleType: 'none', padding: 0, fontSize:'15px' }}> {linkList} </ul>
      </div>
    </div>
    </div>

  )
}

export default Products;