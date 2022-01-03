import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  
  const[logemail,setLogemail] = useState('')
  const[logpassword,setLogpassword] = useState('')

  const navigate = useNavigate()
  
  const loghandleSubmit = (e) =>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(logemail,logpassword).then(()=>{
          navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  const {firebase} = useContext(FirebaseContext)
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={loghandleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={logemail}
            onChange={(e)=>setLogemail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={logpassword}
            onChange={(e)=>setLogpassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup' className="signup">Signup</Link>
        
      </div>
    </div>
  );
}

export default Login;
