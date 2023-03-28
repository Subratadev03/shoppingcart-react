import React from 'react'
import { NavLink } from 'react-router-dom'

function ShowProducts({product}) {
    // console.log(key)
  return (
    <tbody>
        <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
                <button className='btn btn-primary'>Edit</button>
                <NavLink className="btn btn-green" to="/add-product">Add</NavLink>

            </td>
            {/* <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td> */}
        </tr>

    </tbody>
    

        
    
  )
}

export default ShowProducts