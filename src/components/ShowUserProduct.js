import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';

function ShowUserProduct({product,addCart}) {
    // console.log(product.id)
    const access_token = localStorage.getItem('access_token');
    const headers = {  "Content-type": "application/json","Authorization": `Bearer ${access_token}` };
    const handleCart = async()=>{
      const response = await axios.post('http://localhost:3001/api/cart/addtocart',{
        product_id:product.id
      },{headers})
      // console.log(response)
      const status = response.data.status
      if(status){
        addCart()
      }
    }
    const handleBuy = async()=>{
      const response = await axios.post('http://localhost:3001/api/products/buy-product',{
        product_id:product.id,
        status:true
      },{headers})
      console.log(response);
      console.log('buy now')
    }
  return (
    <div>
        <div className='column'>
            <div className="card">
              {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans"/> */}
              <h1>{product.title}</h1>
              <p className="price">${product.price}</p>
              <p>{product.description}</p>
              <p><button onClick={handleCart}>Add to Cart</button></p><br/>
              <p><Link to={'/product/checkout'}className="btn btn-primary" >Buy Now</Link> </p>
            </div>
        </div>
    </div>
  )
}

export default ShowUserProduct