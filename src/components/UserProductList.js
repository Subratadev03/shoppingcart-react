import React from 'react'

function UserProductList() {
  return (
    <div> 
        <h2 >Product Card</h2>
        <div className='row'>
          <div className='column'>
            <div class="card">
              <img src="/w3images/jeans3.jpg" alt="Denim Jeans"/>
              <h1>Tailored Jeans</h1>
              <p class="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className='column'>

            <div class="card">
              <img src="/w3images/jeans3.jpg" alt="Denim Jeans"/>
              <h1>Tailored Jeans</h1>
              <p class="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className='column'>

          <div class="card">
            <img src="/w3images/jeans3.jpg" alt="Denim Jeans"/>
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
            <p><button>Add to Cart</button></p>
          </div>
          </div>

        </div>
    </div>
  )
}

export default UserProductList