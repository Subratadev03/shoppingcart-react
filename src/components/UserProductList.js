import React from 'react'
import ShowUserProduct from './ShowUserProduct'

function UserProductList({products}) {
  // console.log(products)
  const renderProducts = products.map((product,index)=>{
    return <ShowUserProduct product={product} key={index}></ShowUserProduct>
  })
  return (
    <div> 
        <h2 >Products</h2>
        <div className='row'>
          {renderProducts}
        </div>
    </div>
  )
}

export default UserProductList