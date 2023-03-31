import axios from 'axios'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import EditProducts from './EditProducts'

function ShowProducts({product}) {
    // console.log(key)
    const access_token = localStorage.getItem('access_token');
    const headers = {  "Content-type": "application/json","Authorization": `Bearer ${access_token}` };
    const id =product.id

    const handleDelete = async()=>{
      const response =await axios.delete(`http://localhost:3001/api/products/${id}`,{headers})
      const data = response.data;
      // console.log(response)
    }
  return (
    <>
    <tbody>
        <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
                <Link className='btn btn-primary' to={`/edit-product/${product.id}`}>Edit</Link><hr/>
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
            </td>
            {/* <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td> */}
        </tr>

    </tbody>
    {/* <EditProducts product={product}></EditProducts> */}
    </>
        
    
  )
}

export default ShowProducts