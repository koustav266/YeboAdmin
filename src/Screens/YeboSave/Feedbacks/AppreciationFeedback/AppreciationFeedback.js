import React, { useState } from 'react'
import "./AppreciationFeedback.scss";
import ReactTable from "../../../../Components/ReactTable/ReactTable";
// import ClosedFeedbacks from "./ClosedFeedback/ClosedFeedbacks";
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AppreciationFeedback = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [rating, setRating] = useState(0) // initial rating value
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }
    const data = [
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'June 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Danny',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'Aug 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Arnold',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },

    ]

    const columns = [
        {
            Header: 'Date',
            accessor: 'Date'
        },
        {
            Header: 'Employee',
            accessor: 'Employee'
        },

        {
            Header: 'Office Location',
            accessor: 'OfficeLocation'
        },
        {
            Header: 'Rating',
            accessor: 'Rating',
            Cell: ({ cell: { value } }) => (
                <Rating onClick={handleRating} ratingValue={rating} size={15} fillColor='#66276e'/* Rating Props */ />
            )
        },
        {
            Header: 'Vendor',
            accessor: 'Vendor'
        },
        {
            Header: 'Vehicle',
            accessor: 'Vehicle'
        },
        {
            Header: 'Driver',
            accessor: 'Driver'
        },
        {
            Header: 'Comments',
            accessor: 'Comments'
        },

    ]
    const [FormData, setFormData] = useState(data)
    const [searchfilter, setsearchfilter] = useState('');
    const handleSearchElements = (event) => {
        // console.log("searched value", event.target.value);
        let filterData = [];
        setsearchfilter(event.target.value)
        data.forEach((item) => {
            for (const key in item) {
                if (item[key].toString().toLowerCase().startsWith(event.target.value.toLowerCase())) {
                    filterData.push(item);
                    break;
                }
            }
        })
        console.log(filterData)
        setFormData(filterData);
    }
    return (
        <>
            <div className="apprecition_feedback">
                <div className="d-flex">
                    {/* <Sidebar /> */}
                    <div className="apprecition_feedback_div container py-5">
                        <div className="main_heading">
                            <h1>Feedbacks</h1>
                            <div className="date_picker">
                                <span>Date</span>
                                {/* <form action="/action_page.php">
                                    <input type="date" id="birthday" name="birthday" />
                                </form> */}
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" />
                                <span>To</span>
                                {/* <form action="/action_page.php">
                                    <input type="date" id="birthday" name="birthday" />
                                </form> */}
                                <DatePicker selected={toDate} onChange={(date) => setToDate(date)} dateFormat="dd/MM/yyyy" />
                            </div>
                        </div>
                        <div className="sub_heading my-4">
                            <div className="feedback_tabs">
                                <Link to={'/dashboard/feedbacks'} className="pending_feedback">Pending</Link>
                                <Link to={'/dashboard/closedfeedbacks'} className="closed_feedback">Closed</Link>
                                <Link to={'/dashboard/appreciationfeedback'} className="appreciation_feedback">Appreciation</Link>
                                {/* <h3 className="pending_feedback">Pending</h3>
                                <h3>Closed</h3>
                                <h3>Appreciation</h3> */}
                            </div>

                            <div className="date_search">
                                <div className="select_office">
                                    <span>Organization</span>
                                    <select name="cars" id="cars">
                                        <option value=""></option>
                                        <option value="saab">All</option>
                                        <option value="opel">Branch 1</option>
                                        <option value="audi">Branch 2</option>
                                    </select>
                                </div>

                                <div className="search_bar">
                                    <span>Search</span>
                                    <input onChange={handleSearchElements} value={searchfilter} />
                                </div>
                                {/* <Searchbar / >  */}
                                {/* <div className="date_picker">
                                    <span>Date</span>
                                    <form action="/action_page.php">
                                        <input type="date" id="birthday" name="birthday" />
                                    </form>
                                </div> */}
                            </div>
                        </div>
                        <div className="manage_agency_table">
                            <ReactTable columns={columns} data={FormData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppreciationFeedback
