import axios from 'axios'
import React,{useEffect, useState} from 'react'
import ShowProducts from './ShowProducts';

function ProductList() {
    const [products,setProducts] = useState([])
    const getProducts = async()=>{
        const response = await axios.get('http://localhost:3001/api/products/get-product'); 
        const resluts =  response.data
        // const updateProducts = [...products,response.data]
        setProducts(resluts)
        // console.log(products)
    }
    const renderProductList = products.map((product,index) =>{
        // console.log(index)
        return <ShowProducts product={product} key={index}></ShowProducts>
    })
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Desscription</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
                {renderProductList}

        
        </table>
    </div>
  )
}

export default ProductList