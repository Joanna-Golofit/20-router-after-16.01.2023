import React from 'react'
import { Link } from 'react-router-dom'

const dummyProducts = [
  {id: 'p1', title: 'Product 1'},
  {id: 'p2', title: 'Product 2'},
  {id: 'p3', title: 'Product 3'},
]

const Products = () => {
  return (
    <>
      <div>Our products:</div>
      <ul>
        {dummyProducts.map(product => <li key={product.id}><Link to={`/products/${product.id}`}>{product.title}</Link></li>)}
      </ul>
    </>
  )
}

export default Products