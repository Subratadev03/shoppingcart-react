import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditProducts() {
    const params = useParams()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('')
    const navigate = useNavigate()
    // console.log(product)
    
    const access_token = localStorage.getItem('access_token');
    const headers = {  "Content-type": "application/json","Authorization": `Bearer ${access_token}` };
    const id =params.id
    const getProduct = async()=>{
        // console.log(params.id)
        const response  = await axios.get(`http://localhost:3001/api/products/${id}`,{headers})
        const data = response.data;
        setTitle(data.title)
        setDescription(data.description)
        // console.log(response)
    }
    const handleSubmit = async (event)=>{
        event.preventDefault()
        const response  =await axios.put(`http://localhost:3001/api/products/${id}`,{
            title:title,
            description:description
        },{headers})
        if(response.data.status){
            navigate('/user-dashboard')
        }
        console.log(response)
    }
    useEffect(()=>{
        getProduct()    
    },[])
  return (
    <div>
        EditProducts
        
        <form className='form-class' onSubmit={handleSubmit}>
            <label htmlFor="fname">Title</label>
            <input type="text" className='add-product-input' value={title} onChange={e=>setTitle(e.target.value)} id="title"  name="title"  placeholder="Title.." required/>

            <label htmlFor="lname">Description</label>
            <input type="text"  className='add-product-input' value={description} onChange={e=>setDescription(e.target.value)} id="description" name="description" placeholder="Description." required/>
            
            <label htmlFor="lname">Image</label>
            <input type="file"  className='add-product-input' id="image"  name="image" placeholder="image"/>
            
        
            <button className='add-product' type="submit"> Update product</button>
        </form>        
    </div>
  )
}

export default EditProducts