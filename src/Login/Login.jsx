import React, { useState } from 'react'
import './Login.css'
import loginImg from '../assets/UGC.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {

  const [userInput, setUserInput] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    // axios.post('http://localhost:3001/Login', { email, password })
    axios.post('http://localhost:3001/Login', { userInput: userInput, password })
      .then(result => {
        console.log("result", result);
        if (result.data === "Success") {
          navigate('/');
        }
      })
      .catch(err => {
        console.log(err);
        console.log("Login failed, please try again!!");
      })
      .finally(() => {
        setLoading(false);
      })
  }



  return (
    <div className="background">
      <div className='Login'>
        <div className="left">
          {/* <img src={loginImg} alt="" /> */}
        </div>
        <div className="right">
          <h1>Welcome Back !</h1>

          <input type="email" name="email" id="LoginEmail" placeholder='Email | Username | Contact' onChange={(e) => setUserInput(e.target.value)} />
          
          <input type="password" name="password" id="psw" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          
          <p>Don't have an account? <Link to="/signup">Signup</Link></p>

          <button onClick={handleSubmit} disabled={loading || !userInput || !password}>{loading ? 'Logging in  →' : 'Login  →'}</button>
        </div>
      </div>
    </div>
  )
}

export default Login