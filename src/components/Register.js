import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Register() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loggedIn,setLoggedIn] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        const loggingStatus = localStorage.getItem('name')
        if(loggingStatus !== null)
        {
            setLoggedIn(true)
        }   
    })

    const handleSubmit = async(event)=>{
        event.preventDefault()
        // console.log(event)
        const response = await axios.post('http://localhost:3000/api/auth/register',{
            name:name,
            email:email,
            password:password
        })
        if(response.status === 200){
            navigate('/')
        }

        console.log(response);
    }

    const registerForm = (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <label htmlFor="psw-repeat"><b>Name</b></label>
                    <input className='add-product-input' onChange={e=>setName(e.target.value)} type="text" placeholder="Enter name" name="name" id="psw-repeat" required/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input className='add-product-input' type="text" onChange={e=>setEmail(e.target.value)}  placeholder="Enter Email" name="email" id="email" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input className='add-product-input' type="password" onChange={e=>setPassword(e.target.value)}  placeholder="Enter Password" name="psw" id="psw" required/>

                    <hr/>
                    {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}

                    <button type="submit" className="registerbtn">Register</button>
                </div>
                
                <div className="container signin">
                    <p>Already have an account? <a href="/">Login</a>.</p>
                </div>
            </form>
        </div>        
    )
  return (
    <div>

        {loggedIn ? navigate('/user-dashboard'): registerForm}
    </div>
  )
}

export default Register