import React from 'react'
import '../Styles/SignIn.css'
import logo from '../Assets/logo.png'
import facebook from '../Assets/facebook.png'
import google from '../Assets/google.png'
import apple from '../Assets/apple.png'
import justDial from '../Assets/justDial.png'

const SignIn = () => {
    return (
        <div className="container">
            <div className='row justify-content-center'>
                <div className='col-xl-6 col-lg-8 col-md-10 col-sm-12'>
                    <div className='sign-in'>
                        <img className='logo' src={logo} alt="" />
                        <h1 className='welcome-title'><span className='welcome'>Welcome</span> <span className='goBus'>YesGoBus</span></h1>
                        <p className='signin-paragraph'>Sign In with your mobile number</p>
                        {/* <input type="number" className="form-control mb-3" placeholder='+91 | ' /> */}
                        <button className='mobile'>+91 <div className='upLine'></div>Mobile Number</button>
                        <div className='option'>
                            <div className='option-set'></div>
                            <span>Or</span>
                            <div className='option-set'></div>
                        </div>
                        <button className='socialIcon-btn1 mb-2'><img className='facebook-logo' src={facebook} alt="" /> Continue with Facebook</button>
                        <button className='socialIcon-btn2 mb-2'><img className='google-logo' src={google} alt="" /> Continue with Google</button>
                        <button className='socialIcon-btn3 mb-2'><img className='apple-logo' src={apple} alt="" /> Continue with Apple</button>
                        <p className='signUp'>I don't have an account <span className='signUp-set'>Sign Up</span></p>
                    </div>
                    <div className='justDial-img'>
                        <img className='justDial' src={justDial} alt="" />
                    </div>
                    <div className='sign-in-btn'>
                        <button>Sign In</button>
                    </div>
                   

                </div>
            </div>
        </div>
    )
}

export default SignIn
