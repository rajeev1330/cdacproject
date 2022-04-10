import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import loginValidation from '../validations/LoginValidation'
import '../css/Signin.css';

const SellerSignin = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // // form submit
    // const submitHandler = (e) => {
    //     e.preventDefault();
    // }
    // const dispatch = useDispatch()

    const [user, setUser] = useState({
        "email": "",
        "password": ""
    })

    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(loginValidation(user))
        setSubmitted(true)
    }
    return (
        <>
            <div className="container-fluid box">
                <div className="card">
                    <div className="text">
                        <h2>Welcome to Seller Login</h2>
                        <p>Enter your credentials to access your account.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="input-text">
                            {/* <i className="fa fa-envelope"></i> */}
                            <input type="email"
                                placeholder="Enter your email"
                                name="email" id="email"
                                value={user.email}
                                // onChange={(e) => setEmail(e.target.value)} 
                                onChange={handleInput} />
                            {errors.email && <small className="text-danger float-right">{errors.email}</small>}
                        </div>

                        <div className="input-text">
                            {/* <i className="fa fa-lock"></i> */}
                            <input type="password"
                                placeholder="Enter your password"
                                name="password" id="password"
                                value={user.password}
                                // onChange={(e) => setPassword(e.target.value)} 
                                onChange={handleInput} />
                            {errors.password && <small className="text-danger float-right">{errors.password}</small>}
                        </div>

                        <div className="buttons">
                            <button type="submit">Sign in</button>
                        </div>
                        <div className="forgot">
                            <p>Don't have an account? <Link to="/sellersignup"> Register</Link></p>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default SellerSignin