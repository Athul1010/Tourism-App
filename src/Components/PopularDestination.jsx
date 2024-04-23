import React from 'react'
import '../Styles/PopularDestination.css'
import { CiStar } from "react-icons/ci";

const PopularDestination = () => {
    return (
        <div className='popular-place'>
            <div className='popular'>
                <h4>Popular Destinations</h4>
                <p>See all</p>
            </div>


            <div className="container">
            <div className="row">
                
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 places-section">
                    <div className="goa">
                        <div className='places'>
                            <h4>Goa, India</h4>
                            <h5><span className='rs'>Rs</span> <span className='money'>30,000</span> <span className='starting'>Starting</span> <span className='star'>&#9733;</span> <span className='num'>4.8</span></h5>
                        </div>
                    </div>
                </div>

               
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 next-place-section">
                    <div className="manali">
                        <dov className='places'>
                            <h4>Manali, India</h4>
                            <h5><span className='rs'>Rs</span> <span className='money'>30,000</span> <span className='starting'>Starting</span> <span className='star'>&#9733;</span> <span className='num'>4.8</span></h5>
                        </dov>
                    </div>
                    <div className="china">
                        <div  className='places'>
                            <h4>China</h4>
                            <h5><span className='rs'>Rs</span> <span className='money'>30,000</span> <span className='starting'>Starting</span> <span className='star'>&#9733;</span> <span className='num'>4.8</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default PopularDestination