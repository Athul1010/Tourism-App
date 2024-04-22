import React from 'react'
import '../Styles/Destinations.css'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaBusSimple } from "react-icons/fa6";
import { LuBus } from "react-icons/lu";
import { LuHotel } from "react-icons/lu";

const Destinations = () => {
    return (
        <div className='destination'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 mx-auto">
                        <div className="notification">
                            <div>
                                <p>Hi Karthik</p>
                                <h1>Where You Wanna Go?</h1>
                            </div>
                            <div>
                                <span><IoIosNotificationsOutline /></span>
                            </div>
                        </div>
                        <div className="searchBar">
                            <input type="text" className="form-control mb-3" placeholder="Search" />
                            <span className="search-icon"><IoSearchOutline /></span>
                        </div>

                        <div className="choices">
                            <div className="tour">
                                <div><span className='tour-icon'><FaMapLocationDot /></span></div>
                                <div><span className='sub-title'>Tour</span></div>
                            </div>
                            <div className="bus">
                                <div><span className='bus-icon'><FaBusSimple /></span></div>
                                <div><span className='sub-title'>Bus</span></div>
                            </div>
                            <div className="cab">
                                <div><span className='cab-icon'><LuBus /></span></div>
                                <div><span className='sub-title'>Cab</span></div>
                            </div>
                            <div className="hotel">
                                <div><span className='hotel-icon'><LuHotel /></span></div>
                                <div><span className='sub-title'>Franchises</span></div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations;
