import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";


function Navbar({onLogout}) {
    const navigate = useNavigate()

    const logout =async()=>{
        const access_token = localStorage.getItem('access_token');
        const response = await axios.get('http://localhost:3001/api/auth/logout',{
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${access_token}`,
            },
        })
        const status = response.status;
        if(status === 200){
            localStorage.clear();
            navigate('/')
            onLogout(false)
        }
        // console.log(response.status)
    }
  return (
    <div>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="/user-dashboard">Shopping Cart</a>
        </div>
        <ul className="nav navbar-nav">
            <li className="active"><a href="/user-dashboard">Products</a></li>
            <li><NavLink href="" onClick={logout}>Logout</NavLink></li>
            {/* <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li> */}
        </ul>
        </div>
        </nav>
    </div>
  )
}

export default Navbar