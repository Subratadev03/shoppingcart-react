import axios from 'axios';
import React,{useState,useEffect} from 'react'
// import UserDashboard from './UserDashboard';
import { useNavigate } from "react-router-dom";

function Login({onLogin}) {
    const [email,setEmail]  = useState('')
    const [password,setPassword]  = useState('')
    const [errorMessage,setErrorMessage] = useState({})
    const [loggedIn,setLoggedIn] = useState(false)
    const navigate = useNavigate();
    
    useEffect(()=>{
        console.log('Use effcet triggered')
        const loggingStatus = localStorage.getItem('name')
        if(loggingStatus !== null)
        {
            setLoggedIn(true)
        }
    },[])


    // const renderDashboard = ()=>{
    //     if(loggedIn===true)
    //     {
    //         navigate('/user-dashboard')
    //     }
    //     else{

    //         navigate("/")
    //     }
    // }
    const renderErrorMessage = (error)=>{
        return error === errorMessage.name && (
            <div className="error">{errorMessage.message}</div>
          );
    }

    const handleSubmit= async(event)=>{
        event.preventDefault();
        const response =await axios.post('http://localhost:3001/api/auth/login',{
            email:email,
            password:password
        })

        // const data = await  response
        const data = response.data
        if(response.data.status === false){
            setErrorMessage({name:"error",message:data.message})
        }
        else{
            setLoggedIn(true)
            // console.log(data)
            const userData = {name:data.user.name,access_token:data.access_token,role:data.user.role}
            onLogin(userData)
            // setUser(...user,data.user)
            // console.log(data)
            // localStorage.setItem('access_token',data.access_token)
            // localStorage.setItem('name',data.user.name)

        }
        // console.log(response.data)
    }

    const renderForm = (
        <div className="form" >
        <h2>Login form</h2>
        <form onSubmit={handleSubmit}>
            {renderErrorMessage('error')}
            <div className="input-container">
                <label>Email </label>
                <input type="text" value={email} name="email" onChange={e=>setEmail(e.target.value)} required />
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} required />
            </div>
            <div className="button-container">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>     
    );

  return (
    <div>
        {loggedIn ? navigate('/user-dashboard'):renderForm}

    </div>

  )
}

export default Login