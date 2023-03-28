import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import ProductList from './ProductList';
import UserProductList from './UserProductList';


function UserDashboard() {
    const [name,setName] = useState('')
    const [role,setRole] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        const username = localStorage.getItem('name')
        const userRole = localStorage.getItem('role')
        if(username ===null)
        {
            navigate('/')
        }
        // console.log(username)
        setName(username);
        setRole(userRole)
    },[])
    // console.log(role)
  return (
    <div>
        <h3>Hii {name}</h3>
        {role === 'admin' ? <ProductList></ProductList> : <UserProductList></UserProductList>}
    </div>
  )
}

export default UserDashboard