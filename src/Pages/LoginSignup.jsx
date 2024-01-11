import React from 'react'
import './CSS/LoginSignup.css'

export default function LoginSignup() {
  return (
    <div className='login-signup'>
       <div className='login-signup-container'>
          <h1>Sign Up</h1>
          <div className='loginsignup-fields'>
           <input type='text' placeholder='Your Name' />
           <input type='text' placeholder='Email Address' />
           <input type='text' placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account ? <span>Login here</span></p>
          <div className='loginsingnup-agree'>
             <input type='checkbox' name='' id='' />
             <p>By continuing i agree to the terms of use & privacy policy</p>
          </div>
       </div>
    </div>
  )
}
