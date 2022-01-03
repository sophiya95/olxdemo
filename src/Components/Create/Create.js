import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
  const Create = () => {
        
        const[name,setName] = useState('')
        const[category,setCategory]=useState('')
        const[price,setPrice]=useState('')
        const[image,setImage]=useState('')

        const {firebase} = useContext(FirebaseContext)
        const {users} = useContext(AuthContext)

        const date= new Date()

        const navigate=useNavigate()
        
        const handleSubmit = (e) =>{
          e.preventDefault()
          firebase.storage().ref(`/images/${image.name}`).put(image).then(({ref})=>{ //create an images folder and 
                                                                                    //fetch the uploaded image name 
                                                                                    //then put the image to that 
                                                                                    //folde then return an object 
                                                                                    //called ref
                  ref.getDownloadURL().then((url)=>{             //download the image url from ref
                        
                    firebase.firestore().collection('products').add({
                            name,
                            category,
                            price,
                            url,
                            userId:users.uid,
                            createDate:date.toDateString()
                          
                          })
                         navigate('/')
                  })

          })

        }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" 
            value={price}
            onChange={(e)=>setPrice(e.target.value)}/>
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          <form>
            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
