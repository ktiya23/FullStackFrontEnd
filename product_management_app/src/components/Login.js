import React, { useContext, useState } from 'react'
import AuthContext from '../context/authContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {login} = useContext(AuthContext);
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const navigate = useNavigate();

    

  return (
    <div>
      
    </div>
  )
}

export default Login
