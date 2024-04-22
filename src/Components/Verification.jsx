import React from 'react'
import '../Styles/Verification.css'
import hand from '../Assets/hand.png'

const Verification = () => {
    return (
        <div className='verify'>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 text-center">
                        <img className='otp-number' src={hand} alt="" />
                        <h1 className='verify-title'>Enter Verification code</h1>
                        <p className='verify-paragraph'>We have just sent a verification code to your mobile number</p>
                        <div className='otp'>
                            <button className=""></button>
                            <button className=""></button>
                            <button className=""></button>
                            <button className=""></button>
                        </div>
                        <p className='send'>Send the code again</p>
                        <div className='verifying'>
                            <button className='verification-btn'>Verify</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Verification