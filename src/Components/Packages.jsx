import React from 'react'
import '../Styles/Package.css'
import Filtering from './Filtering'
import Offer from './Offer'

const Packages = () => {
    return (
        <div className='package-container'>
            <div className="container package">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto sorting">
                        <div className=''>
                            <h1 className='goa-packages'>Goa Packages</h1>
                            <h3 className='beaches'>Experience beaches and sunset</h3>
                            <p className='travel-date'>Add Travel Date, 2 Adults, 1 Room</p>
                            <button className="edit-button">Edit</button>

                            <div className="categorys">
                                <div className='schools'>
                                    <input type="radio" />
                                    <p>School Students</p>
                                </div>
                                <div className='Colleges'>
                                    <input type="radio" />
                                    <p>College Students</p>
                                </div>
                                <div className='corporates'>
                                    <input type="radio" />
                                    <p>Corporate</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <Filtering/>
            <Offer/>
        </div>
    )
}

export default Packages