import React from 'react'

function ShowUserProduct({product}) {
    console.log(product)
  return (
    <div>
        <div className='column'>
            <div class="card">
              {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans"/> */}
              <h1>{product.title}</h1>
              <p class="price">${product.price}</p>
              <p>{product.description}</p>
              <p><button>Add to Cart</button></p>
            </div>
        </div>
    </div>
  )
}

export default ShowUserProduct