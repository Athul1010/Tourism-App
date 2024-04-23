import React from 'react'
import '../Styles/Filtering.css'
import { GoSortDesc } from "react-icons/go";
import { BsFilterSquare } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Filtering = () => {
    return (
        <div className=''>
            <div className='container filter'>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <button className="filtering_buttons">Sort <span><GoSortDesc /></span></button>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <button className="filtering_buttons">Filters <span><BsFilterSquare /></span></button>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <button className="filtering_buttons">Duration <span><IoIosArrowDown /></span></button>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <button className="filtering_buttons">Flights <span><IoIosArrowDown /></span></button>
                    </div>
                    
                </div>
            </div>

            <div className='container types-packages'>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <p className="allPackages">ALL PACKAGES (115)</p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <p className="others">ALL-INCLUSIVE (5)</p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <p className="others">HONEYMOON (8)</p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <p className="others">VILLAS & MORE (8)</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filtering