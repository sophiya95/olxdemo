import React,{useContext} from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext,FirebaseContext } from '../../store/FirebaseContext';
import {Link, useNavigate} from 'react-router-dom'

function Header() {
  const {users} =useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext) 
console.log(users)
  let navigate = useNavigate()
  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        {/* <Link to="/login"> */}
          <Link to="/login" className="linkspan">{ users ? `Welcome ${users.displayName}`: 'Login'}</Link>
         {/* </Link> */}
          <hr />
        </div>
          {users &&   <span onClick={()=>{
            firebase.auth().signOut()
            navigate('/login')
          }}>Logout</span> }
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to="/create" className="linkspan">SELL</Link>
            {/* <span>SELL</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
