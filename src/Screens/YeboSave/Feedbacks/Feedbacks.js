import React, { useState } from 'react'
import { Outlet, useLocation } from "react-router-dom"
import "./Feedbacks.scss";
import SearchBox from '../../../Components/SerachBox/SearchBox';
import Popup from "../../../Components/Popup/Popup";
// import TicketPopup from "./TicketPopup/TicketPopup";
import ReactTable from "../../../Components/ReactTable/ReactTable";
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Feedbacks = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    // const [searchfilter, setSearchfilter] = useState('');
    const [ticetpopup, setTicetpopup] = useState(false);
    const [rating, setRating] = useState() // initial rating value
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }
   
    // const [FormData, setFormData] = useState(data)
    // const [searchfilter, setsearchfilter] = useState('');
    // const handleSearchElements = (event) => {
    //     // console.log("searched value", event.target.value);
    //     let filterData = [];
    //     setsearchfilter(event.target.value)
    //     data.forEach((item) => {
    //         for (const key in item) {
    //             if (item[key].toString().toLowerCase().startsWith(event.target.value.toLowerCase())) {
    //                 filterData.push(item);
    //                 break;
    //             }
    //         }
    //     })
    //     console.log(filterData)
    //     setFormData(filterData);
    // }
    return (
        <>
            <div className="feedback_section">
                
                <div className="feedback_div container py-5">
                    <div className="main_heading">
                        <h1>Feedbacks</h1>
                        {/* <div className="date_picker">
                            <span>Date</span>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" />
                            <span>To</span>
                            <DatePicker selected={toDate} onChange={(date) => setToDate(date)} dateFormat="dd/MM/yyyy" />
                        </div> */}
                    </div>
                    <div className="sub_heading my-4">
                        <div className="feedback_tabs">
                            <Link to={'/dashboard/yeboSave/Feedbacks'} className="pending_feedback">Pending</Link>
                            <Link to={'/dashboard/yeboSave/Feedbacks/closedfeedbacks'} className="closed_feedback">Closed</Link>
                            <Link to={'/dashboard/yeboSave/Feedbacks/appreciationfeedback'} className="appreciation_feedback">Appreciation</Link>
                        </div>
                        {/* <div className="date_search">
                            <div className="search_bar">
                                <span>Search</span>
                                    <SearchBox />
                            </div>
                        </div> */}
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Feedbacks
