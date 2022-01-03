import React,{useState,useEffect,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import Heart from '../../assets/Heart';
import './Post.css';
import { PostContext } from '../../store/PostContext';
import {useNavigate} from 'react-router-dom'

function Posts() {

   const {firebase} = useContext(FirebaseContext)
   const {setPostDetails} = useContext(PostContext)
   const [products,setProducts] = useState([])
    // the products details shown dynamically when the component is first mount

    //in useeffect we fetch the product details from collection products that return an object called snapshot.
    //then we create an array called allPost. snapshot.docs contain a lot of data including product details.so
    //we map that method snapshot.docs and return an object called product. that product contain details of 
    // products. but that object doesn't have any product id so we use the spread operator that include the 
    //product id to the object. These product details return to the array allPost.and this array value set in
    //useState
   useEffect ( ()=>{
     firebase.firestore().collection('products').get().then( (snapshot)=>{
       const allPost = snapshot.docs.map((product)=>{
         return{
           ...product.data(),
           id:product.id
         }
       })
      setProducts(allPost)
     })
   })

   const navigate= useNavigate()
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {/* we call the prducts dynamically so we use {} and map the products in useState */}
          { products.map(product =>{
            
          return(
          
          <div
            className="card"
            onClick={()=>{
              setPostDetails(product)
              navigate('/viewpost')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          
          )})  
     
      }

      </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
