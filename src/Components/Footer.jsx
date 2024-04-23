import React from 'react'
import '../Styles/Footer.css'
import { GoHomeFill } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
    return (
        <div>
            <div className="container footer">
                <div className="row justify-content-center">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 text-center">
                        <div><span className='home-icon'><GoHomeFill /></span></div>
                        <div><h5 className='home-title'>Home</h5></div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 text-center">
                        <span className='other-icons'><IoBagOutline /></span>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 text-center">
                        <span className='other-icons'><IoChatbubbleEllipsesOutline /></span>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 text-center">
                        <span className='other-icons'><FaRegHeart /></span>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 text-center">
                        <span className='other-icons'><CgProfile /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer