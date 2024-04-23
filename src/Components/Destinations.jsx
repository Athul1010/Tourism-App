import React from 'react'
import '../Styles/Destinations.css'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaBusSimple } from "react-icons/fa6";
import { LuBus } from "react-icons/lu";
import { IoIosArrowUp } from "react-icons/io";
import { LuHotel } from "react-icons/lu";
import PopularDestination from './PopularDestination';
import Footer from './Footer';

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
                            <div className='notification-icon'>
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

                        <div className="category">
                            <div className='school'>
                                <input type="radio" />
                                <p>School Students</p>
                            </div>
                            <div className='College'>
                                <input type="radio" />
                                <p>College Students</p>
                            </div>
                            <div className='corporate'>
                                <input type="radio" />
                                <p>Corporate</p>
                            </div>
                        </div>


                        <div className='details'>
                            <div><input type="text" className="form-control mb-3" placeholder="From" /></div>
                            <div><input type="text" className="form-control mb-3" placeholder="To" /></div>
                            <div><input type="date" className="form-control mb-3" placeholder="From" /></div>

                            <div className="searchBar">
                                <input type="text" className="form-control mb-3" placeholder="Travel Type" />
                                <span className="search-icon-arrow"><IoIosArrowUp /></span>
                            </div>

                            <div className="searchBar">
                                <input type="text" className="form-control mb-3" placeholder="Rooms & Gusts" />
                                <span className="search-icon-arrow"><IoIosArrowUp /></span>
                            </div>

                            <div className='searching'>
                                <button>Search</button>
                            </div>
                        </div>

                        <PopularDestination/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations;
