import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid topnav">
                <div className="row">
                    <div className='col-lg-3 col-sm-6 col-md-auto col1'>
                        <img src='./images/logo.png' width="150px" />
                    </div>
                    <div className='col-lg-9 col-sm-12 col-md-auto col2'>
                        <li><Link to="/" active>Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/sellerlogin">Seller</Link></li>
                        <li><Link to="/adminlogin">Admin</Link></li>
                        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Link to="/login"></Link>
                Admin
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/aalogin">AdminLogin</Link>
                <Link className="dropdown-item" to="/slogin">Admin Signup</Link>                        
                                    
                </div>
            </li>
                    
                       

             




                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar