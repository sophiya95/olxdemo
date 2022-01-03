import React,{ useContext,useEffect } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login  from './Pages/Login'
import Create  from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/FirebaseContext'
import Post from './store/PostContext'


function App() {
  const {users,setUsers} =useContext(AuthContext)
   const {firebase} = useContext(FirebaseContext)

  useEffect(() => {
    
     firebase.auth().onAuthStateChanged((users)=>{     //for display user name when they logged in
       setUsers(users)
      
     })
  })
  return (
    <Post>
    <BrowserRouter>
 
    <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/viewpost' element={<ViewPost/>}/>

       
    </Routes>
    
    </BrowserRouter>

</Post>    
   
  )
}

export default App
