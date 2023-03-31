import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import ProductList from './ProductList';
import UserProductList from './UserProductList';


function UserDashboard() {
    const [name,setName] = useState('')
    const [role,setRole] = useState('')
    const [products,setProducts] = useState([])
    const [carts,setCarts] = useState([])
    const navigate = useNavigate();
    const getProducts = async()=>{
        const response = await axios.get('http://localhost:3001/api/products/get-product'); 
        const resluts =  response.data
        setProducts(resluts)
    }
    const getUsersCarts =async ()=>{
        console.log('Get user cart triggered')
        const access_token = localStorage.getItem('access_token');
        const headers = {"Content-type": "application/json","Authorization": `Bearer ${access_token}` };
        const resposne = await axios.get('http://localhost:3001/api/cart/user-carts',{headers})
        const userCarts = resposne.data.carts
        const updateCarts = [...carts,userCarts]
        setCarts(updateCarts)
        console.log(carts)
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
        getUsersCarts()
    },[])
    // console.log(role)
  return (
    <div>
        <h3>Hii {name}</h3>
        {role === 'admin' ? <ProductList products={products}></ProductList> : <UserProductList products={products} onCart={getUsersCarts}></UserProductList>}
    </div>
  )
}

export default UserDashboard