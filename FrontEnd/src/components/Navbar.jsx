import React ,{useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap/Dropdown'

const Navbar= ()=>{
    const[mobile,SetMobile]=useState(true);
const user=JSON.parse(localStorage.getItem('currentUser'))
function logout(){
    localStorage.removeItem('currentUser')
  window.location.href='/'
  }
    return(
        <nav className="navbar">
        <NavLink to="/" className="navbar-brand">BackBencher Fitness</NavLink>
        <button 
            className="navbar-toggler"
            onClick = {()=>SetMobile(!mobile)}    
        >
            <FaBars />
        </button>

        <div className={`mobile mobile-${mobile}`}>
            <NavLink exact to="/" activeClassName="current" className="navbar-link">
                Home
            </NavLink>

            <NavLink to="/fitarmy" activeClassName="current" className="navbar-link">
                #FitArmy
            </NavLink>

            <NavLink to="/about" activeClassName="current"  className="navbar-link">
                About Us
            </NavLink>

            <NavLink to ="/price" className="navbar-link" activeClassName="current">
                Pricing
            </NavLink>
            
            <NavLink to ="/contact" activeClassName="current" className="navbar-link">
                Contact
            </NavLink>
           
            {user?(<>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                
                <a activeClassName="current" className="navbar-link" href="#"onClick={logout}>Logout</a>
             
              </div>
              <NavLink to ="/Meal1" activeClassName="current" className="navbar-link">
              {user.name}
            </NavLink>
                </>)
                :<>
                <NavLink to="/register" className="navbar-link join-now">Join Now</NavLink>
                </>}
           
        </div>
    </nav>
    )
}
export default Navbar