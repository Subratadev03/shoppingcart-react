
import './App.css';
import { useState } from 'react';
import {Routes, Route,useNavigate} from 'react-router-dom'
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
// import UserContext from './contecxt/UserContext';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import Register from './components/Register';
import EditProducts from './components/EditProducts';
import Checkout from './components/Checkout';

function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  const [user,setUser]  = useState(null)
  const navigate = useNavigate()

  const handleLogin =(userData)=>{
    // const updateUser = [...user,userData]
    setUser(userData)
    localStorage.setItem('name',userData.name)
    localStorage.setItem('access_token',userData.access_token)
    localStorage.setItem('role',userData.role)
    setLoggedIn(true)
    navigate('/user-dashboard')

    // console.log(userData);
  }

  const checklogin = ()=>{
    const access_token = localStorage.getItem('access_token')
    const role = localStorage.getItem('role')
    const  name = localStorage.getItem('name')
    const setUserData = {name,role,access_token}
    setUser(setUserData)
    // console.log(user)

    {access_token !== null ? setLoggedIn(true) : setLoggedIn(false)}
  }
  const handleLogout =(data)=>{
    // console.log(data)
    setLoggedIn(data)
  }
  useEffect(()=>{
    console.log('Use effect from App')
    const role = localStorage.getItem('role')
    // console.log(role)
    checklogin()
    // handleLogin()
  },[])
  return (
    <div className="App">
      {loggedIn ? <Navbar onLogout={handleLogout}></Navbar> :''}
      {/* <UserContext.Provider value={user}>
        {loggedIn ?
          
        (
          <UserDashboard user={user}></UserDashboard>
        )
      :(
        <Login onLogin={handleLogin}></Login>
      )
      }
      </UserContext.Provider> */}
      <Routes>
          <Route path="/" element={<Login onLogin={handleLogin}/>}></Route>
          <Route path="/user-dashboard" user={user} element={<UserDashboard/>}></Route> 
          <Route path="/add-product" element={<AddProduct/>}></Route> 
          <Route path="/register" element={<Register/>}></Route> 
          <Route path="/edit-product/:id" element={<EditProducts/>}></Route> 
          <Route path="/product/checkout" element={<Checkout/>}></Route> 
       </Routes>
      {/* <p>Hello</p> */}
    </div>
  );
}

export default App;
