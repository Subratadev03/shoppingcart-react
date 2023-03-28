import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import ProductList from './ProductList';
import UserProductList from './UserProductList';


function UserDashboard() {
    const [name,setName] = useState('')
    const [role,setRole] = useState('')
    const [products,setProducts] = useState([])
    const navigate = useNavigate();
    const getProducts = async()=>{
        const response = await axios.get('http://localhost:3001/api/products/get-product'); 
        const resluts =  response.data
        // const updateProducts = [...products,response.data]
        setProducts(resluts)
        // console.log(products)
    }
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
        getProducts()
    },[])
    // console.log(role)
  return (
    <div>
        <h3>Hii {name}</h3>
        {role === 'admin' ? <ProductList products={products}></ProductList> : <UserProductList products={products}></UserProductList>}
    </div>
  )
}

export default UserDashboard