import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import {Link, useNavigate} from 'react-router-dom'
import './Signup.css';

export default function Signup() {
  
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[password,setPassword]=useState('')
  
  const {firebase} =useContext(FirebaseContext) 

  let navigate = useNavigate()
  
  const handleSubmit = (e) =>{
     // console.log(username) //when we click the signup buttn the data is stored in a db
    // console.log(Firebase)
    e.preventDefault()  //prevent page refreshing
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{ //create an acc with
                                                                                    // email&pass 4 auth
      result.user.updateProfile({displayName:username}).then(()=>{         //upadate the displayname
      //   if (!firebase.auth().currentUser){
      //     setLoading(true)
      // } 
     
        firebase.firestore().collection('users').add({ // for create db & add other details
         
          id:result.user.uid,
          username:username,
          phone:phone,
         
        }).then(()=>{
          navigate('/login') // then push the details to the collection and redirect to login page
          
        })
      
      })
    })
   
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
         <form onSubmit={handleSubmit}> {/* the form data is submitted when we click the signup button. so we 
                                             used  this method */}
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
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
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login" className="login">Login</Link>
        
      </div>
    </div>
  );
}
