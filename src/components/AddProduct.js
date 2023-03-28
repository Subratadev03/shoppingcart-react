import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom/dist'

function AddProduct() {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate()

    
    const handleSubmit = async(event)=>{
        event.preventDefault()
        const access_token = localStorage.getItem('access_token');
        // console.log(access_token)
        const headers = {  "Content-type": "application/json","Authorization": `Bearer ${access_token}` };
        const response = await axios.post('http://localhost:3001/api/products/add-product',{
            title:title,
            description:description,
            price:123,
            published:false

        },{headers})
        if(response.status === 200){
            setTitle('')
            setDescription('')   
            navigate('/user-dashboard')
                     
        }
        console.log(response)
        // console.log(description)
    }

  return (
    <div>
        <form className='form-class' onSubmit={handleSubmit}>
            <label htmlFor="fname">Title</label>
            <input type="text" className='add-product-input' id="title" value={title} onChange={e=>setTitle(e.target.value)} name="title"  placeholder="Title.." required/>

            <label htmlFor="lname">Description</label>
            <input type="text"  className='add-product-input' id="description" value={description} onChange={e=>setDescription(e.target.value)} name="description" placeholder="Description." required/>

        
            <button className='add-product' type="submit"> Add product</button>
        </form>
    </div>
  )
}

export default AddProduct