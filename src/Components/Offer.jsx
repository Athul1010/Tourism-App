import React from 'react'
import '../Styles/Offer.css'
import { MdCurrencyRupee } from "react-icons/md";
import greenSea from '../Assets/greenSea.png'
import { GoDotFill } from "react-icons/go";
import percentage from '../Assets/percentage.png'
import sea from '../Assets/sea.png'
import newSea from '../Assets/4cefe156a20d5cc7a0c0293e89a1e5df.png'

const Offer = () => {
    return (
        <div className='offers'>

            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 mx-auto">
                        <div className='best'>
                            <p>best Offer</p>
                        </div>
                        <div className="card">
                            <img src={greenSea} className="card-img-top" alt="" />
                            <div className="card-body">
                                <div className='amazing'>
                                    <h4 className="card-title">Amazing Goa Flight Inclusive Deal 3N</h4>
                                    <button className="">3N/4D</button>
                                </div>
                                <div className="row">
                                    <div className="col-6 select-option">

                                        <div><p className="main"><GoDotFill className='dot' /> Round Trip Flights</p></div>
                                        <div><p className="main"><GoDotFill className='dot' /> Airport Transfer</p></div>
                                        <div><p className="main"><GoDotFill className='dot' /> 1 Activity</p></div>

                                    </div>
                                    <div className="col-6 select-option">


                                        <p className="main"><GoDotFill className='dot' /> 3 Star Hotel</p>
                                        <p className="main"><GoDotFill className='dot' /> Airport Pickup & Drop</p>

                                    </div>
                                </div>
                                <div className='prices'>
                                    <p>This Price is lower than the average price in April</p>
                                    <div>
                                        <span className=''><span className='person'><MdCurrencyRupee />24,589</span><span className='newPerson'>/Person</span></span>
                                        <p>Total Price 48,988</p>
                                    </div>
                                </div>
                                <div className='percentage-section'>
                                    <img src={percentage} alt="" />
                                    <p>Extra Rs 5,898 off. Use Code CAPITALHUB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 mx-auto">
                        <div className='best'>
                            <p>best Offer</p>
                        </div>
                        <div className="card">
                            <img src={sea} className="card-img-top" alt="" />
                            <div className="card-body">
                                <div className='amazing'>
                                    <h4 className="card-title">Amazing Goa Flight Inclusive Deal 3N</h4>
                                    <button className="">3N/4D</button>
                                </div>
                                <div className="row">
                                    <div className="col-6 select-option">

                                        <div><p className="main"><GoDotFill className='dot' /> Round Trip Flights</p></div>
                                        <div><p className="main"><GoDotFill className='dot' /> Airport Transfer</p></div>
                                        <div><p className="main"><GoDotFill className='dot' /> 1 Activity</p></div>

                                    </div>
                                    <div className="col-6 select-option">


                                        <p className="main"><GoDotFill className='dot' /> 3 Star Hotel</p>
                                        <p className="main"><GoDotFill className='dot' /> Airport Pickup & Drop</p>

                                    </div>
                                </div>
                                <div className='prices'>
                                    <p>This Price is lower than the average price in April</p>
                                    <div>
                                        <span className=''><span className='person'><MdCurrencyRupee />24,589</span><span className='newPerson'>/Person</span></span>
                                        <p>Total Price 48,988</p>
                                    </div>
                                </div>
                                <div className='percentage-section'>
                                    <img src={percentage} alt="" />
                                    <p>Extra Rs 5,898 off. Use Code CAPITALHUB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 mx-auto">
                        <div className='best'>
                            <p>best Offer</p>
                        </div>
                        <div className="card">
                            <img src={newSea} className="card-img-top" alt="" />
                            <div className="card-body">
                                <div className='amazing'>
                                    <h4 className="card-title">Amazing Goa Flight Inclusive Deal 3N</h4>
                                    <button className="">3N/4D</button>
                                </div>
                                <div className="row">
                                    <div className="col-6 select-option">

                                        <div><p className="main"><GoDotFill className='dot' /> Round Trip Flights</p></div>
                                        <div><p className="main"><GoDotFill className='dot' /> Airport Transfer</p></div>
                                        <div><p className="main"><GoDotFill className='dot' /> 1 Activity</p></div>

                                    </div>
                                    <div className="col-6 select-option">


                                        <p className="main"><GoDotFill className='dot' /> 3 Star Hotel</p>
                                        <p className="main"><GoDotFill className='dot' /> Airport Pickup & Drop</p>

                                    </div>
                                </div>
                                <div className='prices'>
                                    <p>This Price is lower than the average price in April</p>
                                    <div>
                                        <span className=''><span className='person'><MdCurrencyRupee />24,589</span><span className='newPerson'>/Person</span></span>
                                        <p>Total Price 48,988</p>
                                    </div>
                                </div>
                                <div className='percentage-section'>
                                    <img src={percentage} alt="" />
                                    <p>Extra Rs 5,898 off. Use Code CAPITALHUB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer