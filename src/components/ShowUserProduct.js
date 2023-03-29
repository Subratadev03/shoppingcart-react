import axios from 'axios'
import React from 'react'

function ShowUserProduct({product}) {
    // console.log(product.id)
    const handleCart = async()=>{
      const access_token = localStorage.getItem('access_token');
      const headers = {  "Content-type": "application/json","Authorization": `Bearer ${access_token}` };
      const response = await axios.post('http://localhost:3001/api/cart/addtocart',{
        product_id:product.id
      },{headers})
      console.log(response)
    }
  return (
    <div>
        <div className='column'>
            <div className="card">
              {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans"/> */}
              <h1>{product.title}</h1>
              <p className="price">${product.price}</p>
              <p>{product.description}</p>
              <p><button onClick={handleCart}>Add to Cart</button></p>
            </div>
        </div>
    </div>
  )
}

export default ShowUserProduct