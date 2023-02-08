import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>ProductDetail {params.productId}</div>
   )
}

export default ProductDetail